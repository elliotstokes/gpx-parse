var geomUtils = require('./geomUtils');

/**
* Constructs a gpx track.
* @class
* @classdesc Holds an instance of a gpx track
* @param {object[]} segments The segments of the track
* @param {String} name The name of the Track
**/
function GpxTrack(segments, name) {

	segments = segments || [];
	name = name || "";


	this.__defineGetter__("name", function() {
		return name;
	});

	this.__defineGetter__("segments", function() {
		return segments;
	});

	/**
	 * Gets a segment of the track.
	**/
	this.segment = function(index) {
		return segments[index];
	};

	/**
	 * Calculates the total length of all the segments within the track
	**/
	this.length = function() {
		var total = 0,
				currentSegment = null;

		for (var i=0, il= segments.length; i<il; i++) {
			currentSegment = segments[i];
			if (currentSegment.length > 1) {
				for (var j=0, jl = currentSegment.length -1; j<jl; j++) {
					total += geomUtils.calculateDistance(currentSegment[j].lat,currentSegment[j].lon,currentSegment[j+1].lat,currentSegment[j+1].lon );
				}
			}
		}

		return total;
	};

}

module.exports = GpxTrack;
