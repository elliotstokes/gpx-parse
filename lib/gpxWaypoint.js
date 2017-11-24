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
 * @param {linkType[]} links An array of links for the waypoint.
 * @param {string} sym The symbol of the waypoint.
 * @param {string} type The type of waypoint.
 * @param {string} fixType Type of fix to measure the waypoint, from list: {'none'|'2d'|'3d'|'dgps'|'pps'}
 * @param {number} sat Number of satellites used to calculate the waypoint fix.
 * @param {number} hdop Horizontal dilution of precision.
 * @param {number} vdop Vertical dilution of precision.
 * @param {number} pdop Position dilution of precision.
 * @param {number} ageofdgpsdata Number of seconds since last DGPS update.
 * @param {number} dgpsid ID of DGPS station used in differential correction.
 **/
function GpxWaypoint(lat, lon, elevation, time, magvar, geoidheight, name, cmt, desc, src, link, sym, type, fixType, sat, hdop, vdop, pdop, ageofdgpsdata, dgpsid) {
	// if (elevation===4.94) {console.log(
	// 	lat, lon, elevation, time, magvar, geoidheight, name, cmt, desc, src, link, sym, type, fixType, sat, hdop, vdop, pdop, ageofdgpsdata, dgpsid
	// );}
	lat = parseFloat(lat) || -1;
	lon = parseFloat(lon) || -1;
	elevation = elevation || -1;
	time =  time ? new Date(time) : null;
	magvar = parseFloat(magvar) || -1;
	geoidheight = parseFloat(geoidheight) || -1;
	name = name || null;
	cmt = cmt || "";
	desc = desc || null;
	src = src || "";
	link = link || [];
	sym = sym || "";
	type = type || "";
	fixType = fixType || null;
	sat = sat || -1
	hdop = parseFloat(hdop) || -1;
	vdop = parseFloat(vdop) || -1;
	pdop = parseFloat(pdop) || -1;
	ageofdgpsdata = parseFloat(ageofdgpsdata) || -1;
	dgpsid = dgpsid || -1;
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

	/**
	* Magnetic variation at the Waypoint.
	* @name magvar
	* @memberOf GpxWaypoint
	* @instance
	* @type {number}
	**/
	this.__defineGetter__("magvar", function() {
		return magvar;
	});

	/**
	* Geoid height at the Waypoint.
	* @name geoidheight
	* @memberOf GpxWaypoint
	* @instance
	* @type {number}
	**/
	this.__defineGetter__("geoidheight", function() {
		return geoidheight;
	});

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
	* Comment on the Waypoint
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
	* @name desc
	* @memberOf GpxWaypoint
	* @instance
	* @type {string}
	**/
	this.__defineGetter__("description", function() {
		return desc;
	});

	/**
	* Source of the the Waypoint
	* @name src
	* @memberOf GpxWaypoint
	* @instance
	* @type {string}
	**/
	this.__defineGetter__("src", function() {
		return src;
	});

	/**
	* Links associated with the Waypoint
	* @name link
	* @memberOf GpxWaypoint
	* @instance
	* @type {Array<linkType>}
	**/

	this.__defineGetter__("links", function() {
		if (link.length) {
			return link.map(function(l) {
				var href = l.hasOwnProperty('$') ? l.$.href : "";
				var text = l.text&&l.text[0] ? l.text[0] : "";
				var type = l.type&&l.type[0] ? l.type[0] : "";
				return {href:href, text:text, type:type};
			});
		}
		else { return []; }
	});

	/**
	* Symbol used to mark the Waypoint
	* @name sym
	* @memberOf GpxWaypoint
	* @instance
	* @type {string}
	**/
	this.__defineGetter__("sym", function() {
		return sym;
	});

	/**
	* Type associated with the Waypoint
	* @name type
	* @memberOf GpxWaypoint
	* @instance
	* @type {string}
	**/
	this.__defineGetter__("type", function() {
		return type;
	});

	/**
	* Fix tyoe used measure the waypoint, from list: {'none'|'2d'|'3d'|'dgps'|'pps'}
	* @name fixType
	* @memberOf GpxWaypoint
	* @instance
	* @type {string}
	**/
	this.__defineGetter__("fixType", function() {
		return fixType;
	});

	/**
	* Number of satellites used to calculate the waypoint fix.
	* @name sat
	* @memberOf GpxWaypoint
	* @instance
	* @type {number}
	**/
	this.__defineGetter__("sat", function() {
		return sat;
	});

	/**
	* Horizontal dilution of precision.
	* @name hdop
	* @memberOf GpxWaypoint
	* @instance
	* @type {number}
	**/
	this.__defineGetter__("hdop", function() {
		return hdop;
	});

	/**
	* Vertical dilution of precision.
	* @name vdop
	* @memberOf GpxWaypoint
	* @instance
	* @type {number}
	**/
	this.__defineGetter__("vdop", function() {
		return vdop;
	});

	/**
	* Position dilution of precision.
	* @name pdop
	* @memberOf GpxWaypoint
	* @instance
	* @type {number}
	**/
	this.__defineGetter__("pdop", function() {
		return pdop;
	});

	/**
	* Number of seconds since last DGPS update.
	* @name ageofdgpsdata
	* @memberOf GpxWaypoint
	* @instance
	* @type {number}
	**/
	this.__defineGetter__("ageofdgpsdata", function() {
		return ageofdgpsdata;
	});

	/**
	* ID of DGPS station used in differential correction.
	* @name dgpsid
	* @memberOf GpxWaypoint
	* @instance
	* @type {number}
	**/
	this.__defineGetter__("dgpsid", function() {
		return dgpsid;
	});
}

module.exports = GpxWaypoint;
