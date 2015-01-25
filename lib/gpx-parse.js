/**
 * Module for parsing gpx files
 * @module gpx-parse
**/

 /*jslint node: true */
"use strict";

var assert = require("assert"),
    fs = require("fs"),
    url = require("url"),
    http = require("http"),
    https = require("https"),
	GpxResult = require('./gpxResult'),
	GpxExtent = require('./gpxExtent'),
	GpxWaypoint = require('./gpxWaypoint'),
	GpxTrack = require('./gpxTrack'),
	GpxMetaData = require('./gpxMetaData'),
	GpxRoute = require('./gpxRoute'),
	geomUtils = require('./geomUtils');


/**
 * Parses the waypoints into an array of waypoints.
 * @param {Array<Object>} gpxWaypoints - The array of points from the xml
 */
var _getWayPoints = function(gpxWaypoints) {

	var waypoints = [],
		currentWaypoint = null,
		point = null;
	if (gpxWaypoints !== null && gpxWaypoints !== undefined) {
		//grab waypoints
		for (var i = 0, il = gpxWaypoints.length; i < il; i++) {
			currentWaypoint = gpxWaypoints[i];
			point = new GpxWaypoint(currentWaypoint.$.lat, currentWaypoint.$.lon, currentWaypoint.ele, currentWaypoint.time);
			waypoints.push(point);
		}
	}

	return waypoints;
};

/**
 * Parses routes into an array of route objects
 */
var _getRoutes = function(gpxRoutes) {
	//grab routes
	var routes = [],
		route = null;
	if (gpxRoutes !== null && gpxRoutes !== undefined) {
		for (var i = 0, il = gpxRoutes.length; i < il; i++) {
			//clear out route points
			var routePoints = [],
			currentRoute = gpxRoutes[i];

			for (var j = 0, jl = currentRoute.rtept.length; j < jl; j++) {
				routePoints.push(new GpxWaypoint(currentRoute.rtept[j].$.lat, currentRoute.rtept[j].$.lon));
			}

			route = new GpxRoute(gpxRoutes.name, gpxRoutes.cmt, gpxRoutes.desc, routePoints);


			routes.push(route);
		}
	}

	return routes;
};

var _getTracks = function(gpxTracks) {
	//grab tracks
	var tracks = [];

	for (var i = 0, il = gpxTracks.length; i < il; i++) {

		var trackSegments = [],
			currentTrack = gpxTracks[i],
			trackName = null;

		if (currentTrack.name) {
			trackName = currentTrack.name[0];
		}

		for (var j = 0, jl = currentTrack.trkseg.length; j < jl; j++) {

			var trackSegement = [],
				currentSegment = currentTrack.trkseg[j],
				time;

			for (var k = 0, kl = currentSegment.trkpt.length; k < kl; k++) {

				var trackPoint = currentSegment.trkpt[k],
					elevation = trackPoint.ele;
				time = trackPoint.hasOwnProperty('time') ? trackPoint.time :null;
				trackSegement.push(new GpxWaypoint(trackPoint.$.lat, trackPoint.$.lon, elevation, time));
			}

			trackSegments.push(trackSegement);
		}

		tracks.push(new GpxTrack(trackSegments, trackName));
	}

	return tracks;
};

/**
 * Parses v1.0 data into data structure
 */
var _ParseV10 = function(gpx) {

	var extent = null,
		metadata = null;

	extent = new GpxExtent();
	metadata = new GpxMetaData(gpx.$.creator, gpx.time, extent);

	return new GpxResult(metadata, _getWayPoints(gpx.wpt), _getRoutes(gpx.rte), _getTracks(gpx.trk));
};

var _ParseV11 = function(gpx) {
	var metadata,
			time;
	if (gpx.metadata && gpx.metadata[0]) {
		if (gpx.metadata[0].time) {
			time = gpx.metadata[0].time[0];
		}
		metadata = new GpxMetaData(gpx.$.creator, time);
	} else {
		metadata = new GpxMetaData();
	}

	return new GpxResult(metadata, _getWayPoints(gpx.wpt), _getRoutes(gpx.rte), _getTracks(gpx.trk));
};

/**
 * Parses gpx passed in as String
 * @param {string} gpxString gpxData passed in as string
 * @param {gpxParseCompleteCallback} callback Callback function to call when parse has completed.
 */
exports.parseGpx = function(gpxString, callback) {

	var parseString = require('xml2js').parseString,
		gpxResult = null,
		version = null;

	parseString(gpxString, function(error, data) {
		if (error) {
			callback(error, null);
			return;
		}

		try {
    		if (!data.hasOwnProperty('gpx')||!data.gpx.hasOwnProperty('$'))
    			return callback(new Error("version not specified"), null);

    		version = data.gpx.$.version;
    		if (version === "1.0") {
    			gpxResult = _ParseV10(data.gpx);
    		} else if (version === "1.1") {
    			gpxResult = _ParseV11(data.gpx);
    		} else {
    			callback(new Error("version not supported"), null);
    			return;
    		}
            callback(null, gpxResult);
        } catch (error) {
            return callback(error);
        }
	});
};


/**
 * Parse gpx from a file
 * @param {string} gpxFile Path to gpx file you want to parse
 * @param {gpxParseCompleteCallback} callback Callback function to call when parse has completed.
 */
exports.parseGpxFromFile = function(gpxFile, callback) {

	fs.readFile(gpxFile, function(error, file) {

		if (error) {
			console.log("error");
			callback(error, null);
			return;
		}

		exports.parseGpx(file, callback);
	});
};

/**
 * Fetch a remote GPX file via HTTP(S) and parse it.
 * @param {string} uri The URI of the remote gpx file.
 * @param {gpxParseCompleteCallback} callback Callback function to call when parse has completed.
 *
 */
exports.parseRemoteGpxFile = function parseRemoteGpxFile (uri, callback) {
    assert.equal(typeof uri, 'string', 'uri should be a string');
    assert.equal(typeof callback, 'function', 'callback should be a function');

    function onError (err) {
        return callback(new Error('failed to fetch gpx file: ' + err.toString()));
    }

    function onResponse (res) {
        var body = '';

        res.on('data', function (data) {
            body = body + data;
        });

        res.once('end', function () {
            exports.parseGpx(body, callback);
        });
    }

    (('https:' === url.parse(uri).protocol) ? https : http)
        .get(uri, onResponse)
        .once('error', onError);
};

//expose objects
exports.GpxResult = GpxResult;
exports.GpxExtent = GpxExtent;
exports.GpxWaypoint = GpxWaypoint;
exports.GpxTrack = GpxTrack;
exports.GpxMetaData = GpxMetaData;
exports.GpxRoute = GpxRoute;
exports.utils = geomUtils;

/**
 * Callback when gpx result has been processed.
 * @callback gpxParseCompleteCallback
 * @param {Object} error If an error has occurred the error otherwise null
 * @param {GpxResult} response The parsed gpx file object
 */
