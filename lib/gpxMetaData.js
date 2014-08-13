/**
 * Contructor for the gpx metadata class
 * @class
 * @classdesc Stores all the metadata associated with the gpx file.
 * @param {string} creator The creator of the gpx file.
 * @param {string} time The string representation of the datetime from the file.
 */
function GpxMetaData(creator, time, bounds, name, desc, author, copyright, links, keywords) {

	creator = creator || null;
	time = new Date(time) || null;
	bounds = bounds || null;
	name = name || "";
	desc = desc || "";

	this.__defineGetter__("creator", function() {
		return creator;
	});

	this.__defineGetter__("time", function() {
		return time;
	});

	this.__defineGetter__("bounds", function() {
		return bounds;
	});

	this.__defineGetter__("name", function() {
		return name;
	});

	this.__defineGetter__("description", function() {
		return desc;
	});

	this.__defineGetter__("author", function() {
		return author;
	});

	this.__defineGetter__("copyright", function() {
		return copyright;
	});

	this.__defineGetter__("links", function() {
		return links;
	});

	this.__defineGetter__("keywords", function() {
		return keywords;
	});
}

module.exports = GpxMetaData;
