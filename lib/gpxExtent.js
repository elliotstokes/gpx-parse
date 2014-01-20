/**
* constrctor for gpx extent
*/
function GpxExtent (minx, miny, maxx, maxy) {

	var minx = minx,
		miny = miny,
		maxx = maxx,
		maxy = maxy;

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