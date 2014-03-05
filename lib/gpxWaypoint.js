function GpxWaypoint(lat, lon, elevation, time, magvar, geoidheight, name, cmt, desc, src, links, sym, type) {

	var lat = parseFloat(lat) || -1,
		lon = parseFloat(lon) || -1,
		elevation = elevation || -1,
		time = new Date(time) || null;

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