var gpxParse = require("../"),
    geomUtils = gpxParse.utils;

module.exports = {
    setUp: function(callback) {
        callback();
    },
    tearDown: function(callback) {
        // clean up
        callback();
    },

    "Should calculate the distance between two points": function(test) {
        var distance = geomUtils.calculateDistance(4.367, 5.6745, -40.4556, 39.34345);
        test.equal(distance, 6045.97811789512);
        test.done();
    },

    "Should calculate the midpoint between two points" : function(test) {
        geomUtils.calculateMidpoint(4.367, 5.6745, -40.4556, 39.34345);
        test.done();
    }
};
