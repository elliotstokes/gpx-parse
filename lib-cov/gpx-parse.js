// instrument by jscoverage, do not modifly this file
(function () {
  var BASE;
  if (typeof global === 'object') {
    BASE = global;
  } else if (typeof window === 'object') {
    BASE = window;
  } else {
    throw new Error('[jscoverage] unknow ENV!');
  }
  if (!BASE._$jscoverage) {
    BASE._$jscoverage = {};
    BASE._$jscoverage_cond = {};
    BASE._$jscoverage_done = function (file, line, express) {
      if (arguments.length === 2) {
        BASE._$jscoverage[file][line] ++;
      } else {
        BASE._$jscoverage_cond[file][line] ++;
        return express;
      }
    };
    BASE._$jscoverage_init = function (base, file, lines) {
      var tmp = [];
      for (var i = 0; i < lines.length; i ++) {
        tmp[lines[i]] = 0;
      }
      base[file] = tmp;
    };
  }
})();
_$jscoverage_init(_$jscoverage, "lib/gpx-parse.js",[1,15,17,22,23,24,25,28,34,36,39,41,42,43,44,47,50,53,56,58,60,62,65,67,70,72,75,78,81,84,90,92,95,96,98,101,102,103,111,113,117,119,120,121,124,125,126,127,128,130,131,134,144,146,148,149,150,151,154,159,160,161,162,163,164,165]);
_$jscoverage_init(_$jscoverage_cond, "lib/gpx-parse.js",[119,125,127,148]);
_$jscoverage["lib/gpx-parse.js"].source = ["var xml2js = require(\"xml2js\"),","\tfs = require(\"fs\"),","\tGpxResult = require('./gpxResult'),","\tGpxExtent = require('./gpxExtent'),","\tGpxWaypoint = require('./gpxWaypoint'),","\tGpxTrack = require('./gpxTrack'),","\tGpxMetaData = require('./gpxMetaData'),","\tGpxRoute = require('./gpxRoute'),","\tgeomUtils = require('./geomUtils');","","","/**"," * Parses the waypoints into an array of waypoints."," */","var _getWayPoints = function(gpxWaypoints) {","","\tvar waypoints = [],","\t\tcurrentWaypoint = null,","\t\tpoint = null;","","\t//grab waypoints","\tfor (var i = 0, il = gpxWaypoints.length; i < il; i++) {","\t\tcurrentWaypoint = gpxWaypoints[i];","\t\tpoint = new GpxWaypoint(currentWaypoint.$.lat, currentWaypoint.$.lon, currentWaypoint.ele, currentWaypoint.time);","\t\twaypoints.push(point);","\t}","","\treturn waypoints;","};","","/**"," * Parses routes into an array of route objects"," */","var _getRoutes = function(gpxRoutes) {","\t//grab routes","\tvar routes = [],","\t\troute = null;","","\tfor (var i = 0, il = gpxRoutes.length; i < il; i++) {","\t\t//clear out route points","\t\tvar routePoints = [];","\t\tcurrentRoute = gpxRoutes[i];","\t\tfor (var j = 0, jl = currentRoute.rtept.length; j < jl; j++) {","\t\t\troutePoints.push(new GpxWaypoint(currentRoute.rtept[j].$.lat, currentRoute.rtept[j].$.lon));","\t\t}","","\t\troute = new GpxRoute(gpxRoutes.name, gpxRoutes.cmt, gpxRoutes.desc, routePoints);","","","\t\troutes.push(route);","\t}","","\treturn routes;","};","","var _getTracks = function(gpxTracks) {","\t//grab tracks","\tvar tracks = [];","","\tfor (var i = 0, il = gpxTracks.length; i < il; i++) {","","\t\tvar trackSegments = [],","\t\t\tcurrentTrack = gpxTracks[i];","","\t\tfor (var j = 0, jl = currentTrack.trkseg.length; j < jl; j++) {","","\t\t\tvar trackSegement = [],","\t\t\t\tcurrentSegment = currentTrack.trkseg[j];","","\t\t\tfor (var k = 0, kl = currentSegment.trkpt.length; k < kl; k++) {","","\t\t\t\tvar trackPoint = currentSegment.trkpt[k],","\t\t\t\t\televation = trackPoint.ele;","","\t\t\t\ttrackSegement.push(new GpxWaypoint(trackPoint.$.lat, trackPoint.$.lon, elevation));","\t\t\t}","","\t\t\ttrackSegments.push(trackSegement);","\t\t}","","\t\ttracks.push(new GpxTrack(trackSegments));","\t}","","\treturn tracks;","};","","/**"," * Parses v1.0 data into data structure"," */","var _ParseV10 = function(gpx) {","","\tvar extent = null,","\t\tmetadata = null;","","\textent = new GpxExtent();","\tmetaData = new GpxMetaData(gpx.$.creator, gpx.time, extent);","\t","\treturn new GpxResult(metaData, _getWayPoints(gpx.wpt), _getRoutes(gpx.rte), _getTracks(gpx.trk));","};","","var _ParseV11 = function(gpxData) {","\tvar metadata = new GpxMetadata(gpx.$.creator, gpx.metadata.time);","\treturn new GpxResult(metadata);","};","","/**"," * Parses gpx passed in as String"," * @param {string} gpxString gpxData passed in as string"," * @param {gpxParseCompleteCallback} callback Callback function to call when parse has completed."," */","exports.parseGpx = function(gpxString, callback) {","\t","\tvar parseString = require('xml2js').parseString,","\t\tgpxResult = null,","\t\tversion = null;","","\tparseString(gpxString, function(error, data) {","","\t\tif (error) {","\t\t\tcallback(error, null);","\t\t\treturn;","\t\t}","","\t\tversion = data.gpx.$.version;","\t\tif (version === \"1.0\") {","\t\t\tgpxResult = _ParseV10(data.gpx);","\t\t} else if (version === \"1.1\") {","\t\t\tgpxResult = null;","\t\t} else {","\t\t\tcallback(new Error(\"version not supported\"), null);","\t\t\treturn;","\t\t}","","\t\tcallback(null, gpxResult);","\t});","}","","","/**"," * Parse gpx from a file"," * @param {string} gpxFile Path to gpx file you want to parse"," * @param {gpxParseCompleteCallback} callback Callback function to call when parse has completed."," */","exports.parseGpxFromFile = function(gpxFile, callback) {","","\tfs.open(gpxFile, \"r\", function(error, file) {","","\t\tif (error) {","\t\t\tconsole.log(\"error\");","\t\t\tcallback(error, null);","\t\t\treturn;","\t\t}","","\t\texports.parseGpx(file, callback);","\t});","}","","//expose objects","exports.GpxResult = GpxResult;","exports.GpxExtent = GpxExtent;","exports.GpxWaypoint = GpxWaypoint;","exports.GpxTrack = GpxTrack;","exports.GpxMetaData = GpxMetaData;","exports.GpxRoute = GpxRoute;","exports.utils = geomUtils;","","/* Callback document for gpxParseCompleteCallback"," * @callback requestCallback"," * @param {Object} error If an error has occurred the error otherwise null"," * @param {string} responseMessage"," */"];
_$jscoverage_done("lib/gpx-parse.js", 1);
var xml2js = require("xml2js"), fs = require("fs"), GpxResult = require("./gpxResult"), GpxExtent = require("./gpxExtent"), GpxWaypoint = require("./gpxWaypoint"), GpxTrack = require("./gpxTrack"), GpxMetaData = require("./gpxMetaData"), GpxRoute = require("./gpxRoute"), geomUtils = require("./geomUtils");

_$jscoverage_done("lib/gpx-parse.js", 15);
var _getWayPoints = function(gpxWaypoints) {
    _$jscoverage_done("lib/gpx-parse.js", 17);
    var waypoints = [], currentWaypoint = null, point = null;
    _$jscoverage_done("lib/gpx-parse.js", 22);
    for (var i = 0, il = gpxWaypoints.length; i < il; i++) {
        _$jscoverage_done("lib/gpx-parse.js", 23);
        currentWaypoint = gpxWaypoints[i];
        _$jscoverage_done("lib/gpx-parse.js", 24);
        point = new GpxWaypoint(currentWaypoint.$.lat, currentWaypoint.$.lon, currentWaypoint.ele, currentWaypoint.time);
        _$jscoverage_done("lib/gpx-parse.js", 25);
        waypoints.push(point);
    }
    _$jscoverage_done("lib/gpx-parse.js", 28);
    return waypoints;
};

_$jscoverage_done("lib/gpx-parse.js", 34);
var _getRoutes = function(gpxRoutes) {
    _$jscoverage_done("lib/gpx-parse.js", 36);
    var routes = [], route = null;
    _$jscoverage_done("lib/gpx-parse.js", 39);
    for (var i = 0, il = gpxRoutes.length; i < il; i++) {
        _$jscoverage_done("lib/gpx-parse.js", 41);
        var routePoints = [];
        _$jscoverage_done("lib/gpx-parse.js", 42);
        currentRoute = gpxRoutes[i];
        _$jscoverage_done("lib/gpx-parse.js", 43);
        for (var j = 0, jl = currentRoute.rtept.length; j < jl; j++) {
            _$jscoverage_done("lib/gpx-parse.js", 44);
            routePoints.push(new GpxWaypoint(currentRoute.rtept[j].$.lat, currentRoute.rtept[j].$.lon));
        }
        _$jscoverage_done("lib/gpx-parse.js", 47);
        route = new GpxRoute(gpxRoutes.name, gpxRoutes.cmt, gpxRoutes.desc, routePoints);
        _$jscoverage_done("lib/gpx-parse.js", 50);
        routes.push(route);
    }
    _$jscoverage_done("lib/gpx-parse.js", 53);
    return routes;
};

_$jscoverage_done("lib/gpx-parse.js", 56);
var _getTracks = function(gpxTracks) {
    _$jscoverage_done("lib/gpx-parse.js", 58);
    var tracks = [];
    _$jscoverage_done("lib/gpx-parse.js", 60);
    for (var i = 0, il = gpxTracks.length; i < il; i++) {
        _$jscoverage_done("lib/gpx-parse.js", 62);
        var trackSegments = [], currentTrack = gpxTracks[i];
        _$jscoverage_done("lib/gpx-parse.js", 65);
        for (var j = 0, jl = currentTrack.trkseg.length; j < jl; j++) {
            _$jscoverage_done("lib/gpx-parse.js", 67);
            var trackSegement = [], currentSegment = currentTrack.trkseg[j];
            _$jscoverage_done("lib/gpx-parse.js", 70);
            for (var k = 0, kl = currentSegment.trkpt.length; k < kl; k++) {
                _$jscoverage_done("lib/gpx-parse.js", 72);
                var trackPoint = currentSegment.trkpt[k], elevation = trackPoint.ele;
                _$jscoverage_done("lib/gpx-parse.js", 75);
                trackSegement.push(new GpxWaypoint(trackPoint.$.lat, trackPoint.$.lon, elevation));
            }
            _$jscoverage_done("lib/gpx-parse.js", 78);
            trackSegments.push(trackSegement);
        }
        _$jscoverage_done("lib/gpx-parse.js", 81);
        tracks.push(new GpxTrack(trackSegments));
    }
    _$jscoverage_done("lib/gpx-parse.js", 84);
    return tracks;
};

_$jscoverage_done("lib/gpx-parse.js", 90);
var _ParseV10 = function(gpx) {
    _$jscoverage_done("lib/gpx-parse.js", 92);
    var extent = null, metadata = null;
    _$jscoverage_done("lib/gpx-parse.js", 95);
    extent = new GpxExtent;
    _$jscoverage_done("lib/gpx-parse.js", 96);
    metaData = new GpxMetaData(gpx.$.creator, gpx.time, extent);
    _$jscoverage_done("lib/gpx-parse.js", 98);
    return new GpxResult(metaData, _getWayPoints(gpx.wpt), _getRoutes(gpx.rte), _getTracks(gpx.trk));
};

_$jscoverage_done("lib/gpx-parse.js", 101);
var _ParseV11 = function(gpxData) {
    _$jscoverage_done("lib/gpx-parse.js", 102);
    var metadata = new GpxMetadata(gpx.$.creator, gpx.metadata.time);
    _$jscoverage_done("lib/gpx-parse.js", 103);
    return new GpxResult(metadata);
};

_$jscoverage_done("lib/gpx-parse.js", 111);
exports.parseGpx = function(gpxString, callback) {
    _$jscoverage_done("lib/gpx-parse.js", 113);
    var parseString = require("xml2js").parseString, gpxResult = null, version = null;
    _$jscoverage_done("lib/gpx-parse.js", 117);
    parseString(gpxString, function(error, data) {
        _$jscoverage_done("lib/gpx-parse.js", 119);
        if (_$jscoverage_done("lib/gpx-parse.js", 119, error)) {
            _$jscoverage_done("lib/gpx-parse.js", 120);
            callback(error, null);
            _$jscoverage_done("lib/gpx-parse.js", 121);
            return;
        }
        _$jscoverage_done("lib/gpx-parse.js", 124);
        version = data.gpx.$.version;
        _$jscoverage_done("lib/gpx-parse.js", 125);
        if (_$jscoverage_done("lib/gpx-parse.js", 125, version === "1.0")) {
            _$jscoverage_done("lib/gpx-parse.js", 126);
            gpxResult = _ParseV10(data.gpx);
        } else {
            _$jscoverage_done("lib/gpx-parse.js", 127);
            if (_$jscoverage_done("lib/gpx-parse.js", 127, version === "1.1")) {
                _$jscoverage_done("lib/gpx-parse.js", 128);
                gpxResult = null;
            } else {
                _$jscoverage_done("lib/gpx-parse.js", 130);
                callback(new Error("version not supported"), null);
                _$jscoverage_done("lib/gpx-parse.js", 131);
                return;
            }
        }
        _$jscoverage_done("lib/gpx-parse.js", 134);
        callback(null, gpxResult);
    });
};

_$jscoverage_done("lib/gpx-parse.js", 144);
exports.parseGpxFromFile = function(gpxFile, callback) {
    _$jscoverage_done("lib/gpx-parse.js", 146);
    fs.open(gpxFile, "r", function(error, file) {
        _$jscoverage_done("lib/gpx-parse.js", 148);
        if (_$jscoverage_done("lib/gpx-parse.js", 148, error)) {
            _$jscoverage_done("lib/gpx-parse.js", 149);
            console.log("error");
            _$jscoverage_done("lib/gpx-parse.js", 150);
            callback(error, null);
            _$jscoverage_done("lib/gpx-parse.js", 151);
            return;
        }
        _$jscoverage_done("lib/gpx-parse.js", 154);
        exports.parseGpx(file, callback);
    });
};

_$jscoverage_done("lib/gpx-parse.js", 159);
exports.GpxResult = GpxResult;

_$jscoverage_done("lib/gpx-parse.js", 160);
exports.GpxExtent = GpxExtent;

_$jscoverage_done("lib/gpx-parse.js", 161);
exports.GpxWaypoint = GpxWaypoint;

_$jscoverage_done("lib/gpx-parse.js", 162);
exports.GpxTrack = GpxTrack;

_$jscoverage_done("lib/gpx-parse.js", 163);
exports.GpxMetaData = GpxMetaData;

_$jscoverage_done("lib/gpx-parse.js", 164);
exports.GpxRoute = GpxRoute;

_$jscoverage_done("lib/gpx-parse.js", 165);
exports.utils = geomUtils;