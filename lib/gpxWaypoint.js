/**
 * Constructs a gpx waypoint.
 * @class
 * @classdesc Holds an instance of a gpx waypoint.
 **/
function GpxWaypoint(lat, lon, elevation, time, magvar, geoidheight, name, cmt, desc, src, links, sym, type) {

	lat = parseFloat(lat) || -1;
	lon = parseFloat(lon) || -1;
	elevation = elevation || -1;
	time = new Date(time) || null;
	name = name || "";
	cmt = cmt || "";
	desc = desc || "";
	src = src || "";
	type = type || "";

	this.__defineGetter__("name", function() {
		return name;
	});

	this.__defineGetter__("cmt", function() {
		return cmt;
	});

	this.__defineGetter__("desc", function() {
		return desc;
	});

	this.__defineGetter__("src", function() {
		return src;
	});

	this.__defineGetter__("type", function() {
		return type;
	});

	this.__defineGetter__("lat", function() {
		return lat;
	});

	this.__defineGetter__("lon", function() {
		return lon;
	});

	this.__defineGetter__("elevation", function() {
		return elevation;
	});

	this.__defineGetter__("time", function() {
		return time;
	});
}

module.exports = GpxWaypoint;