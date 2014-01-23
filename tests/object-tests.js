var GpxResult = require("../lib/gpxResult"),
    GpxPoint = require('../lib/gpxPoint'),
    GpxExtent = require('../lib/gpxExtent');

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
            ];

        gpxResult = new GpxResult("creator", "2002-02-27T17:18:33Z", extent, waypoints, routes);

        test.equal(gpxResult.creator, "creator");
        test.equal(gpxResult.time, "2002-02-27T17:18:33Z");
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