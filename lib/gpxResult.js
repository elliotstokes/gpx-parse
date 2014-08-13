/**
 * Constructor for GpxResult
 * @class
 * @classdesc Holds the results of the gpx parse
 * @param {GpxMetaData} metadata The metadata associated with the gpx trace
 * @param {Array.<GpxWaypoint>} waypoints An array of waypoints.
 * @param {Array.<GpxRoute>} routes An array of routes.
 * @param {Array.<GpxTrack>} tracks An array of tracks.
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
