var gpxParse = require("../../");

module.exports = {

    setUp: function(callback) {
        callback();
    },
    tearDown: function(callback) {
        // clean up
        callback();
    },

    "Test that a gpx file can be loaded": function(test) {
      gpxParse.parseGpxFromFile(__dirname + '/data/route-1.1.gpx', function(err, data) {
        test.equal(data.metadata.time.toString(), 'Invalid Date');
        test.equal(data.metadata.creator, 'TomTom');
        test.equal(data.tracks.length, 1);
        test.equal(data.tracks[0].name, 'RUNNING');
        test.done();
      });
    }
};
