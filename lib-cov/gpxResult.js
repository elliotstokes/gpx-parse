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
_$jscoverage_init(_$jscoverage, "lib/gpxResult.js",[8,14,15,18,19,22,23,26,27,33]);
_$jscoverage_init(_$jscoverage_cond, "lib/gpxResult.js",[]);
_$jscoverage["lib/gpxResult.js"].source = ["/**"," * Constructor for GpxResult"," * @class"," * @classdesc Holds the results of the gpx parse"," * @param {string} creator The creator of the gpx"," */","function GpxResult(metadata, waypoints, routes, tracks) {","\tvar metadata = metadata || null,","\t\twaypoints = waypoints || null,","\t\troutes = routes || null,","\t\ttracks = tracks || null;","","","\tthis.__defineGetter__(\"metadata\", function() {","\t\treturn metadata;","\t});","","\tthis.__defineGetter__(\"waypoints\", function() {","\t\treturn waypoints;","\t});","","\tthis.__defineGetter__(\"routes\", function() {","\t\treturn routes;","\t});","","\tthis.__defineGetter__(\"tracks\", function() {","\t\treturn tracks;","\t});","}","","","","module.exports = GpxResult;"];
function GpxResult(metadata, waypoints, routes, tracks) {
    _$jscoverage_done("lib/gpxResult.js", 8);
    var metadata = metadata || null, waypoints = waypoints || null, routes = routes || null, tracks = tracks || null;
    _$jscoverage_done("lib/gpxResult.js", 14);
    this.__defineGetter__("metadata", function() {
        _$jscoverage_done("lib/gpxResult.js", 15);
        return metadata;
    });
    _$jscoverage_done("lib/gpxResult.js", 18);
    this.__defineGetter__("waypoints", function() {
        _$jscoverage_done("lib/gpxResult.js", 19);
        return waypoints;
    });
    _$jscoverage_done("lib/gpxResult.js", 22);
    this.__defineGetter__("routes", function() {
        _$jscoverage_done("lib/gpxResult.js", 23);
        return routes;
    });
    _$jscoverage_done("lib/gpxResult.js", 26);
    this.__defineGetter__("tracks", function() {
        _$jscoverage_done("lib/gpxResult.js", 27);
        return tracks;
    });
}

_$jscoverage_done("lib/gpxResult.js", 33);
module.exports = GpxResult;