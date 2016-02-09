var gpxParse = require("../"),
    GpxResult = gpxParse.GpxResult,
    GpxWaypoint = gpxParse.GpxWaypoint,
    GpxExtent = gpxParse.GpxExtent,
    GpxMetaData = gpxParse.GpxMetaData,
    GpxRoute = gpxParse.GpxRoute,
    GpxTrack = gpxParse.GpxTrack;

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
        test.equal(gpxResult.metadata.time.getTime(), 1014830313000);
        test.equal(gpxResult.metadata.bounds.minx, "1");
        test.done();
    },

    "Should be able to create an instance of the metadata class": function(test) {
        var extent = new GpxExtent(1, 2, 3, 4),
            links = ["http://alink.com"];

        var metadata = new GpxMetaData("creator", "2002-02-27T17:18:33Z", extent, "name", "desc", "author", "copyright", links, "keywords");

        test.equal(metadata.creator, "creator");
        test.equal(metadata.time.getTime(), 1014830313000);
        test.equal(metadata.bounds.minx, 1);
        test.equal(metadata.name, "name");
        test.equal(metadata.description, "desc");
        test.equal(metadata.author, "author");
        test.equal(metadata.copyright, "copyright");
        test.equal(metadata.links.length, 1);
        test.equal(metadata.links[0], "http://alink.com");
        test.equal(metadata.keywords, "keywords");
        test.done();
    },

    "Test that the gpxWaypoint can be initialized": function(test) {
        var gpxPoint = new GpxWaypoint(1, 2, 3, "2002-02-27T17:18:33Z",1,1,"name","cmt", "description");
        test.equal(gpxPoint.lat, 1);
        test.equal(gpxPoint.lon, 2);
        test.equal(gpxPoint.elevation, 3);
        test.equal(gpxPoint.time.getTime(),1014830313000 );
        test.equal(gpxPoint.name, "name");
        test.equal(gpxPoint.cmt, "cmt");
        test.equal(gpxPoint.description, "description");
        test.done();
    },

    "Test that the gpxRoute can be initialized": function(test) {
        var gpxRoute = new GpxRoute("name", "cmt", "description", [new GpxWaypoint(1, 2), new GpxWaypoint(3, 4)]);
        test.equal(gpxRoute.name, "name");
        test.equal(gpxRoute.cmt, "cmt");
        test.equal(gpxRoute.description, "description");
        test.done();
    },

    "Test that the gpxTrack can be initialized": function(test) {
        var gpxTrack = new GpxTrack([[new GpxWaypoint(1, 2), new GpxWaypoint(3, 4)],[new GpxWaypoint(5, 6), new GpxWaypoint(7, 8)]], "name");
        test.equal(gpxTrack.name, "name");
        test.equal(gpxTrack.segments.length, 2);
        test.equal(gpxTrack.segment(0).length, 2);
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
};
