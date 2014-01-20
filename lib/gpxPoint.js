function GpxPoint(x, y) {
	var x = parseFloat(x) || -1,
		y = parseFloat(y) || -1,
		elevation = elevation || -1;

	this.__defineGetter__("x", function() {
		return x;
	});

	this.__defineGetter__("y", function() {
		return y;
	});

	this.__defineGetter__("elevation", function() {
		return elevation;
	});
}

module.exports = GpxPoint;