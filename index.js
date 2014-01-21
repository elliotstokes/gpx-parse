var xml2js = require("xml2js"),
	fs = require("fs"),
	GpxResult = require('./lib/gpxResult'),
	GpxExtent = require('./lib/gpxExtent'),
	GpxPoint = require('./lib/gpxPoint'),
	GpxTrack = require('./lib/gpxTrack');

/**
 * Parses gpx passed in as String
 * @param {string} gpxString gpxData passed in as string
 * @param {gpxParseCompleteCallback} callback Callback function to call when parse has completed.
 */
exports.parseGpx = function(gpxString, callback) {
	var parser = new xml2js.Parser(),
		gpxResult = null,
		routes = [],
		extent = null,
		waypoints = [],
		tracks = [];

	parser.parseString(gpxString, function(error, data) {

		if (error) {
			callback(error, null);
			return;
		}

		//grab waypoints
		for (var i = 0, il = data.gpx.wpt.length; i < il; i++) {
			waypoints.push(new GpxPoint(data.gpx.wpt[i].$.lat, data.gpx.wpt[i].$.lon));

		}

		//grab routes
		for (var i = 0, il = data.gpx.rte.length; i < il; i++) {
			var route = [];

			for (var j = 0, jl = data.gpx.rte[i].rtept.length; j < jl; j++) {
				route.push(new GpxPoint(data.gpx.rte[i].rtept[j].$.lat, data.gpx.rte[i].rtept[j].$.lon));
			}

			routes.push(route);
		}

		//grab tracks
		for (var i = 0, il = data.gpx.trk.length; i < il; i++) {

			var trackSegments = [];
			for (var j = 0, jl = data.gpx.trk[i].trkseg.length; j < jl; j++) {
				var trackSegement = [];
				for (var k = 0, kl = data.gpx.trk[i].trkseg[j].trkpt.length; k < kl; k++) {
					trackSegement.push(new GpxPoint(data.gpx.trk[i].trkseg[j].trkpt[k].$.lat, data.gpx.trk[i].trkseg[j].trkpt[k].$.lon));
				}

				trackSegments.push(trackSegement);
			}
			var track = new GpxTrack(trackSegments);
			tracks.push(track);
		}


		extent = new GpxExtent();
		gpxResult = new GpxResult(data.gpx.$.creator, data.gpx.time, extent, waypoints, routes, tracks);
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