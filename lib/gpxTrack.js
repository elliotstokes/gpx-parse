function GpxTrack(segments, name) {

	segments = segments || [];
	name = name || "";

	this.__defineGetter__("name", function() {
		return name;
	});

	this.__defineGetter__("segments", function() {
		return segments;
	});

	this.segment = function(index) {
		return segments[index];
	}

}

module.exports = GpxTrack;