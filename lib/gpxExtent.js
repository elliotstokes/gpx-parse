/**
* Contructor for gpx extent
* @classdesc Stores an extent.
* @class
* @param {number} minx The minimum x value
* @param {number} miny The minimum y value
* @param {number} maxx The maximum x value
* @param {number} miny The maximum y value
*/
function GpxExtent(minx, miny, maxx, maxy) {

	minx = minx || -1;
	miny = miny || -1;
	maxx = maxx || -1;
	maxy = maxy || -1;

	this.__defineGetter__("minx", function() {
		return minx;
	});

	this.__defineGetter__("miny", function() {
		return miny;
	});

	this.__defineGetter__("maxx", function() {
		return maxx;
	});

	this.__defineGetter__("maxy", function() {
		return maxy;
	});
}

module.exports = GpxExtent;
