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
 * @param {string} url An url of the waypoint.
 * @param {string} urlname The name of url of the waypoint.
 * @param {string} cache The cache (groundspeak extension).
 * @param {boolean} extraWp T if additional wp (not cache).
 * 
 **/
function GpxWaypoint(lat, lon, elevation, time, magvar, geoidheight, name, cmt, desc, src, links, sym, type, url, urlname, 
					cacheId, cacheAvailable, cacheArchived, cacheName, cachePlacedBy, cacheOwner, cacheType, cacheContainer, cacheCountry, extraWp) {
	lat = parseFloat(lat) || -1;
	lon = parseFloat(lon) || -1;
	elevation = elevation || -1;
	time =  time ? new Date(time) : null;
	magvar = magvar || -1;
	geoidheight = geoidheight || -1;
	name = name || null;
	cmt = cmt || "";
	desc = desc || null;
	src = src || "";
	links = links || null;
	sym = sym || null;
	type = type || null;
	url = url || null;
	urlname = urlname || null;
	cacheId = cacheId || null;
	cacheAvailable = cacheAvailable || null;
	cacheArchived = cacheArchived || null;
	cacheName = cacheName || null;
	cachePlacedBy = cachePlacedBy || null;
	cacheOwner = cacheOwner || null;
	cacheType = cacheType || null;
	cacheContainer = cacheContainer || null;
	cacheCountry = cacheCountry || null;
	extraWp = extraWp || true;
	
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


	/**
	* desc of the Waypoint
	* @name desc
	* @memberOf GpxWaypoint
	* @instance
	* @type {string}
	**/
	this.__defineGetter__("desc", function() {
		return desc;
	});

	this.__defineGetter__("src", function() {
		return src;
	});

	this.__defineGetter__("sym", function() {
		return sym;
	});

	this.__defineGetter__("type", function() {
		return type;
	});
	this.__defineGetter__("url", function() {
		return url;
	});
	this.__defineGetter__("urlname", function() {
		return urlname;
	});

	/**
	* cacheId of the Waypoint
	* @name cacheId
	* @memberOf GpxWaypoint
	* @instance
	* @type {string}
	**/
	this.__defineGetter__("cacheId", function() {
		return cacheId;
	});
		
	/**
	* groundspeak extension cacheAvailable of the Waypoint
	* @name cacheAvailable
	* @memberOf GpxWaypoint
	* @instance
	* @type {string}
	**/
	this.__defineGetter__("cacheAvailable", function() {
		return cacheAvailable;
	});
	/**
	* groundspeak extension cacheArchived of the Waypoint
	* @name cacheArchived
	* @memberOf GpxWaypoint
	* @instance
	* @type {string}
	**/
	this.__defineGetter__("cacheArchived", function() {
		return cacheArchived;
	});
	/**
	* groundspeak extension cacheName of the Waypoint
	* @name cacheName
	* @memberOf GpxWaypoint
	* @instance
	* @type {string}
	**/
	this.__defineGetter__("cacheName", function() {
		return cacheName;
	});
	/**
	* groundspeak extension cachePlacedBy of the Waypoint
	* @name cachePlacedBy
	* @memberOf GpxWaypoint
	* @instance
	* @type {string}
	**/
	this.__defineGetter__("cachePlacedBy", function() {
		return cachePlacedBy;
	});
	/**
	* groundspeak extension cacheOwner of the Waypoint
	* @name cacheOwner
	* @memberOf GpxWaypoint
	* @instance
	* @type {string}
	**/
	this.__defineGetter__("cacheOwner", function() {
		return cacheOwner;
	});
	/**
	* groundspeak extension cacheType of the Waypoint
	* @name cacheType
	* @memberOf GpxWaypoint
	* @instance
	* @type {string}
	**/
	this.__defineGetter__("cacheType", function() {
		return cacheType;
	});
	/**
	* groundspeak extension cacheContainer of the Waypoint
	* @name cacheContainer
	* @memberOf GpxWaypoint
	* @instance
	* @type {string}
	**/
	this.__defineGetter__("cacheContainer", function() {
		return cacheContainer;
	});
	/**
	* groundspeak extension cacheCountry of the Waypoint
	* @name cacheCountry
	* @memberOf GpxWaypoint
	* @instance
	* @type {string}
	**/
	this.__defineGetter__("cacheCountry", function() {
		return cacheCountry;
	});
	/**
	* extra Waypoint (t/f)
	* @name extraWp
	* @memberOf GpxWaypoint
	* @instance
	* @type {boolean}
	**/
	this.__defineGetter__("extraWp", function() {
		return extraWp;
	});
}

module.exports = GpxWaypoint;
