function GpxRoute(name, cmt, desc, points) {
	
	name = name || "";
	desc = desc || "";
	cmt = cmt || "";
	points = points || [];

	this.__defineGetter__("name", function() {
		return name;
	});

	this.__defineGetter__("cmt", function() {
		return cmt;
	});

	this.__defineGetter__("description", function() {
		return desc;
	});

	this.__defineGetter__("points", function() {
		return points;
	});

	this.point = function(index) {
		return points[index];
	};

}

module.exports = GpxRoute;