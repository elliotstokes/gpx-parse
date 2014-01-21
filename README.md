gpx-parse [![NPM Version](https://badge.fury.io/js/gpx-parse.png)](https://badge.fury.io/js/gpx-parse) [![Build Status](https://travis-ci.org/elliotstokes/gpx-parse.png?branch=master)](https://travis-ci.org/elliotstokes/gpx-parse)
========

A library for parsing gpx data. Still in its infancy. Works against the Gpx v1.0 spec. Looking to support 1.1 once 1.0 has been completed. Partial support for routes, waypoints and tracks. Feel free to fork if you need something specific. 

#Installation

	$ npm install gpx-parse

#Usage

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

	$ npm test
