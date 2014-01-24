var xml2js = require("xml2js"),
	fs = require("fs"),
	GpxResult = require('./lib/gpxResult'),
	GpxExtent = require('./lib/gpxExtent'),
	GpxPoint = require('./lib/gpxPoint'),
	GpxTrack = require('./lib/gpxTrack'),
	GpxMetaData = require('./lib/gpxMetaData');

var _getWayPoints = function(gpxWaypoints) {

	var waypoints = [],
		gpxWaypoint= null;
		point = null;

	//grab waypoints
	for (var i = 0, il = gpxWaypoints.length; i < il; i++) {
		gpxWaypoint = gpxWaypoints[i];
		point = new GpxPoint(gpxWaypoint.$.lat, gpxWaypoint.$.lon, gpxWaypoint.ele);
		waypoints.push(point);
	}

	return waypoints;
}


var _ParseV10 = function(gpx) {

	var routes = [],
		extent = null,
		waypoints = null,
		metadata = null,
		tracks = [];

	waypoints = _getWayPoints(gpx.wpt);


	//grab routes
	for (var i = 0, il = gpx.rte.length; i < il; i++) {
		var route = [];

		for (var j = 0, jl = gpx.rte[i].rtept.length; j < jl; j++) {
			route.push(new GpxPoint(gpx.rte[i].rtept[j].$.lat, gpx.rte[i].rtept[j].$.lon));
		}

		routes.push(route);
	}

	//grab tracks
	for (var i = 0, il = gpx.trk.length; i < il; i++) {

		var trackSegments = [];
		for (var j = 0, jl = gpx.trk[i].trkseg.length; j < jl; j++) {
			var trackSegement = [];
			for (var k = 0, kl = gpx.trk[i].trkseg[j].trkpt.length; k < kl; k++) {
				var trackPoint = gpx.trk[i].trkseg[j].trkpt[k];
				var elevation = trackPoint.ele;
				trackSegement.push(new GpxPoint(trackPoint.$.lat, trackPoint.$.lon, elevation));
			}

			trackSegments.push(trackSegement);
		}
		var track = new GpxTrack(trackSegments);
		tracks.push(track);
	}


	extent = new GpxExtent();
	metaData = new GpxMetaData(gpx.$.creator, gpx.time, extent);
	return new GpxResult(metaData, waypoints, routes, tracks);
};

var _ParseV11 = function(gpxData) {
	var metadata = new GpxMetadata(gpx.$.creator, gpx.metadata.time);
	return new GpxResult(metadata);
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

		version = data.gpx.$.version;
		if (version === "1.0") {
			gpxResult = _ParseV10(data.gpx);
		} else if (version === "1.1") {
			gpxResult = null;
		} else {
			callback(new Error("version not supported"), null);
			return;
		}

		callback(null, gpxResult);
	});
}


/**
 * Parse gpx from a file
 * @param {string} gpxFile Path to gpx file you want to parse
 * @param {gpxParseCompleteCallback} callback Callback function to call when parse has completed.
 */
exports.parseGpxFromFile = function(gpxFile, callback) {
	fs.open(gpxFile, "r", function(error, file) {
		exports.parseGpx(file, callback);
	});
}

/* Callback document for gpxParseCompleteCallback
 * @callback requestCallback
 * @param {Object} error If an error has occurred the error otherwise null
 * @param {string} responseMessage
 */