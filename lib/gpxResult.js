/**
 * Constructor for GpxResult
 * @class
 * @classdesc Holds the results of the gpx parse
 * @param {string} creator The creator of the gpx
 */
function GpxResult(creator, time, extent, waypoints, routes, tracks) {
	var waypoints = waypoints,
		routes = routes,
		creator = creator,
		time = time,
		tracks = tracks;

	this.__defineGetter__("creator", function() {
		return creator;
	});

	this.__defineGetter__("time", function() {
		return time;
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