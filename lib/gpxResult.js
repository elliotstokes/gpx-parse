/**
 * Constructor for GpxResult
 * @class
 * @classdesc Holds the results of the gpx parse
 * @param {string} creator The creator of the gpx
 */
function GpxResult(metadata, waypoints, routes, tracks) {
	
	metadata = metadata || null;
	waypoints = waypoints || null;
	routes = routes || null;
	tracks = tracks || null;


	this.__defineGetter__("metadata", function() {
		return metadata;
	});

	this.__defineGetter__("waypoints", function() {
		return waypoints;
	});

	this.__defineGetter__("routes", function() {
		return routes;
	});

	this.__defineGetter__("tracks", function() {
		return tracks;
	});
}



module.exports = GpxResult;