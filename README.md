gpx-parse [![NPM Version](https://badge.fury.io/js/gpx-parse.png)](https://badge.fury.io/js/gpx-parse) [![Build Status](https://travis-ci.org/elliotstokes/gpx-parse.png?branch=master)](https://travis-ci.org/elliotstokes/gpx-parse)
========

A library for parsing gpx data. Still in its infancy. Only supports routes and waypoints currently. Currently working on finishing off the rest of the spec.

#Usage

   $ npm install gpx-parse

```javascript
var gpxParse = require("gpx-parse");

//from file
gpxParse.parseGpxFromFile("/path/to/gpxFile", function(error, data) {
	//do stuff
});

//or from string
gpxParse.parseGpx("&lt;gpx&gt;&lt;/gpx&gt;", function(error, data) {
	//do stuff
});

```

#Tests

Tests are written with nodeunit. To test make sure you have the dev dependencies installed and just run:

npm test.
