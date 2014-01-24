var GpxResult = require("../lib/gpxResult"),
    GpxPoint = require('../lib/gpxPoint'),
    GpxExtent = require('../lib/gpxExtent'),
    GpxMetaData = require('../lib/gpxMetaData');

module.exports = {
    
    setUp: function(callback) {
        callback();
    },
    tearDown: function(callback) {
        // clean up
        callback();
    },

    "Test that the gpx result class can be initialized": function(test) {

        var gpxResult = null,
            waypoints = [],
            extent = new GpxExtent(1, 2, 3, 4),
            routes = [
                []
            ],
            tracks = [],
            links = [],
            metadata = new GpxMetaData("creator", "2002-02-27T17:18:33Z", extent, "name", "desc", "author", "copyright", links, "keywords");

        gpxResult = new GpxResult(metadata, waypoints, routes, tracks);

        test.equal(gpxResult.metadata.creator, "creator");
        test.equal(gpxResult.metadata.time, "2002-02-27T17:18:33Z");
        test.equal(gpxResult.metadata.bounds.minx, "1");
        test.done();
    },

    "Should be able to create an instance of the metadata class": function(test) {
        var extent = new GpxExtent(1, 2, 3, 4),
            links = ["http://alink.com"];

        var metadata = new GpxMetaData("creator", "2002-02-27T17:18:33Z", extent, "name", "desc", "author", "copyright", links, "keywords");

        test.equal(metadata.creator, "creator");
        test.equal(metadata.time, "2002-02-27T17:18:33Z");
        test.equal(metadata.bounds.minx, 1);
        test.equal(metadata.name, "name");
        test.equal(metadata.description, "desc");
        test.equal(metadata.author, "author");
        test.equal(metadata.copyright, "copyright");
        test.equal(metadata.links.length, 1);
        test.equal(metadata.links[0], "http://alink.com");
        test.done();
    },

    "Test that the gpxPoint can be initialized": function(test) {
        var gpxPoint = new GpxPoint();

        test.done();
    },

    "Test that the gpxExtent can be initialized": function(test) {
        var gpxExtent = new GpxExtent(1, 2, 3, 4);

        test.equal(gpxExtent.minx, 1);
        test.equal(gpxExtent.miny, 2);
        test.equal(gpxExtent.maxx, 3);
        test.equal(gpxExtent.maxy, 4);
        test.done();
    }
}