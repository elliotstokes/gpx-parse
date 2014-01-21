function GpxTrack(segments) {

	var segments = segments || [];

	this.__defineGetter__("segments", function() {
		return segments;
	});

	this.segment = function (index) {
		return segments[index];
	}

}

module.exports = GpxTrack;