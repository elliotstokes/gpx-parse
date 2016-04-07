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
	var waypoints = [];
	if (gpxWaypoints && gpxWaypoints.length) {
		gpxWaypoints.forEach(function(wayPoint) {
      var point = new GpxWaypoint(wayPoint.$.lat, wayPoint.$.lon, getFloat(wayPoint.ele), wayPoint.time, null, null, getString(wayPoint.name), null, getString(wayPoint.desc));
      waypoints.push(point);
    });
	}

	return waypoints;
};

/**
 * Parses routes into an array of route objects
 */
var _getRoutes = function(gpxRoutes) {
	var routes = [];

	if (gpxRoutes && gpxRoutes.length) {
    gpxRoutes.forEach(function(currentRoute) {
			var routePoints = [];

			currentRoute.rtept.forEach(function(routePoint) {
				routePoints.push(new GpxWaypoint(routePoint.$.lat, routePoint.$.lon));
			});

			var route = new GpxRoute(gpxRoutes.name, gpxRoutes.cmt, gpxRoutes.desc, routePoints);
			routes.push(route);
		});
	}

	return routes;
};

/**
 * Gets a float from an element
 **/
var getFloat = function(item) {
  var value = null;
  if (item && Array.isArray(item) && item.length > 0) {
    value = parseFloat(item[0]);
  }
  return value;
};

/**
 * Gets a string from an element
 **/
var getString = function(item) {
  var value = null;
  if (item && Array.isArray(item) && item.length > 0) {
    value = item[0].toString();
  }
  return value;
};

/**
 * Grabs any tracks contained within the gpx
 * @params {Object} gpxTracks - THe gpcx tracks from the file
 **/
var _getTracks = function(gpxTracks) {
	var tracks = [];

  if (gpxTracks && gpxTracks.length) {
  	
    gpxTracks.forEach(function(currentTrack) {
  	
  		var trackSegments = [];

      currentTrack.trkseg.forEach(function(currentSegment) {
  			var trackSegement = [];

        currentSegment.trkpt.forEach(function(trackPoint) {
  				var elevation = getFloat(trackPoint.ele);
  				trackSegement.push(new GpxWaypoint(trackPoint.$.lat, trackPoint.$.lon, elevation, trackPoint.time));
  			});

  			trackSegments.push(trackSegement);
  		});

  		tracks.push(new GpxTrack(trackSegments, getString(currentTrack.name)));
  	});
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

/**
 * Parses v1.1 data into data structure
 */
var _ParseV11 = function(gpx) {
	var metadata;
  
	if (gpx.metadata && gpx.metadata.length > 0) {
		metadata = new GpxMetaData(gpx.$.creator, getString(gpx.metadata[0].time));
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
      if (!data.gpx) return callback(new Error("version not specified"), null);

    	version = data.gpx.$.version;
    	
      switch (version) {
        case "1.0":
          gpxResult = _ParseV10(data.gpx);
          break;
        case "1.1":
          gpxResult = _ParseV11(data.gpx);
          break;
        default:
          return callback(new Error("version not supported"), null);
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
