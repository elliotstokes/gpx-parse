var gpxParse = require("../"),
  successfulGpx = ['<?xml version="1.0" encoding="UTF-8" standalone="no" ?>',
    '<gpx xmlns="http://www.topografix.com/GPX/1/1"',
    'xmlns:gpxx="http://www.garmin.com/xmlschemas/GpxExtensions/v3" ',
    'xmlns:gpxtpx="http://www.garmin.com/xmlschemas/TrackPointExtension/v1" ',
    'creator="Oregon 400t" version="1.1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ',
    'xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd ',
    'http://www.garmin.com/xmlschemas/GpxExtensions/v3 http://www.garmin.com/xmlschemas/GpxExtensionsv3.xsd ',
    'http://www.garmin.com/xmlschemas/TrackPointExtension/v1 http://www.garmin.com/xmlschemas/TrackPointExtensionv1.xsd">',
    '<metadata>',
    '<link href="http://www.garmin.com">',
    '<text>Garmin International</text>',
    '</link>',
    '<time>2009-10-17T22:58:43Z</time>',
    '</metadata>',
    '<trk>',
    '<name>Example GPX Document</name>',
    '<trkseg>',
    '<trkpt lat="47.644548" lon="-122.326897">',
    '<ele>4.46</ele>',
    '<time>2009-10-17T18:37:26Z</time>',
    '</trkpt>',
    '<trkpt lat="47.644548" lon="-122.326897">',
    '<ele>4.94</ele>',
    '<time>2009-10-17T18:37:31Z</time>',
    '</trkpt>',
    '<trkpt lat="47.644548" lon="-122.326897">',
    '<ele>6.87</ele>',
    '<time>2009-10-17T18:37:34Z</time>',
    '</trkpt>',
    '</trkseg>',
    '</trk>',
    '</gpx>'
  ].join("\n");

module.exports = {
  setUp: function(callback) {

    //mock the file syste

    callback();
  },

  tearDown: function(callback) {
    // clean up
    callback();
  },



  "Test that valid gpx string is parsed successfully": function(test) {
    gpxParse.parseGpx(successfulGpx, function(error, result) {
      test.equal(result.metadata.creator, "Oregon 400t");
      test.equal(result.metadata.time.getTime(), 1255820323000);
      test.equal(result.tracks.length, 1);
      test.equal(result.tracks[0].name, 'Example GPX Document');
      test.equal(result.tracks[0].segments[0][0].time, new Date('2009-10-17T18:37:26Z').toString());
      test.equal(result.tracks[0].segments[0][0].elevation, 4.46);
      test.done();
    });

  },

  "Should return an error when file does not exist" : function(test) {
    gpxParse.parseGpxFromFile("/path/to/incorrect/gpxFile.gpx", function(error, result) {
      test.notEqual(null, error);
      test.equal(error.message.indexOf('ENOENT'), 0);
      test.done();
    });
  },

  "Test that valid gpx file is parsed successfully": function(test) {

    //this.fsMock.open = function(path, flags, callback) {
    //  callback(null, successfulGpx);
    //}

    //this.gpxParse.parseGpxFromFile("/path/to/gpxFile.gpx", function(error, result) {
      test.done();
    //});

  }
};
