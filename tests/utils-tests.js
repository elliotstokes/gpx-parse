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
        var distanceInKm = geomUtils.calculateDistance(4.367, 5.6745, -40.4556, 39.34345);
        var distanceInMiles = geomUtils.calculateDistance(4.367, 5.6745, -40.4556, 39.34345, true);
        
        test.equal(distanceInKm, 6045.97811789512);
        test.equal(distanceInMiles, distanceInKm/1.609453993933266 ); 
        test.done();
    },

    "Should calculate the midpoint between two points" : function(test) {
        var midpoint = geomUtils.calculateMidpoint(4.367, 5.6745, -40.4556, 39.34345);
        test.deepEqual(midpoint, [-18.78213486, 20.18113593]);
        test.done();
    }
};

