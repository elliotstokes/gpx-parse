/**
 * Constructs a gpx waypoint.
 * @class
 * @classdesc Represents a waypoint, point of interest, or named feature on a map.
 * @param {number} lat The latitude of the waypoint.
 * @param {number} lon The longtitude of the waypoint.
 * @param {number} elevation of the waypoint.
 * @param {string} time The time at the waypoint.
 * @param {number} magvar The magnetic variation at the waypoint.
 * @param {number} geoidheight The geoid height at the waypoint.
 * @param {string} name The name of the waypoint.
 * @param {string} cmt A comment regarding the waypoint.
 * @param {string} desc A description of the waypoint.
 * @param {string} src The source of the waypoint.
 * @param {string[]} links An array of links for the waypoint.
 * @param {string} sym The symbol of the waypoint.
 * @param {string} type The type of waypoint.
 **/
function GpxWaypoint(lat, lon, elevation, time, magvar, geoidheight, name, cmt, desc, src, links, sym, type) {
	lat = parseFloat(lat) || -1;
	lon = parseFloat(lon) || -1;
	elevation = elevation || -1;
	time =  time ? new Date(time) : null;
	name = name || null;
	cmt = cmt || "";
	desc = desc || null;
	src = src || "";
	type = type || "";

	/**
	 * Name of the Waypoint
	 * @name name
	 * @memberOf GpxWaypoint
	 * @instance
	 * @type {string}
	**/
	this.__defineGetter__("name", function() {
		return name;
	});


	/**
	* cmt of the Waypoint
	* @name cmt
	* @memberOf GpxWaypoint
	* @instance
	* @type {string}
	**/
	this.__defineGetter__("cmt", function() {
		return cmt;
	});

	/**
	* Description of the Waypoint
	* @name description
	* @memberOf GpxWaypoint
	* @instance
	* @type {string}
	**/
	Object.defineProperty(this,'description', {
  	get: function() { return desc; }
  });

	this.__defineGetter__("src", function() {
		return src;
	});

	this.__defineGetter__("type", function() {
		return type;
	});

	/**
	* Latitude of the Waypoint
	* @name lat
	* @memberOf GpxWaypoint
	* @instance
	* @type {Number}
	**/
	this.__defineGetter__("lat", function() {
		return lat;
	});

	/**
	* Longtitude of the Waypoint
	* @name lon
	* @memberOf GpxWaypoint
	* @instance
	* @type {Number}
	**/
	this.__defineGetter__("lon", function() {
		return lon;
	});


	/**
	* Elevation at the Waypoint
	* @name elevation
	* @memberOf GpxWaypoint
	* @instance
	* @type {Number}
	**/
	this.__defineGetter__("elevation", function() {
		return elevation;
	});


	/**
	* Time associated with the Waypoint
	* @name time
	* @memberOf GpxWaypoint
	* @instance
	* @type {Date}
	**/
	this.__defineGetter__("time", function() {
		return time;
	});
}

module.exports = GpxWaypoint;
