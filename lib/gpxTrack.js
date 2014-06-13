/**
* Constructs a gpx track.
* @class
* @classdesc Holds an instance of a gpx track
* @param {object[]} segments The segments of the track
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

}

module.exports = GpxTrack;
