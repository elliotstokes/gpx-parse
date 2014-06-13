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
_$jscoverage_init(_$jscoverage, "lib/gpxWaypoint.js",[3,8,9,12,13,16,17,20,21,25]);
_$jscoverage_init(_$jscoverage_cond, "lib/gpxWaypoint.js",[]);
_$jscoverage["lib/gpxWaypoint.js"].source = ["function GpxWaypoint(lat, lon, elevation, time, magvar, geoidheight, name, cmt, desc, src, links, sym, type) {","","\tvar lat = parseFloat(lat) || -1,","\t\tlon = parseFloat(lon) || -1,","\t\televation = elevation || -1,","\t\ttime = new Date(time) || null;","","\tthis.__defineGetter__(\"lat\", function() {","\t\treturn lat;","\t});","","\tthis.__defineGetter__(\"lon\", function() {","\t\treturn lon;","\t});","","\tthis.__defineGetter__(\"elevation\", function() {","\t\treturn elevation;","\t});","","\tthis.__defineGetter__(\"time\", function() {","\t\treturn time;","\t});","}","","module.exports = GpxWaypoint;"];
function GpxWaypoint(lat, lon, elevation, time, magvar, geoidheight, name, cmt, desc, src, links, sym, type) {
    _$jscoverage_done("lib/gpxWaypoint.js", 3);
    var lat = parseFloat(lat) || -1, lon = parseFloat(lon) || -1, elevation = elevation || -1, time = new Date(time) || null;
    _$jscoverage_done("lib/gpxWaypoint.js", 8);
    this.__defineGetter__("lat", function() {
        _$jscoverage_done("lib/gpxWaypoint.js", 9);
        return lat;
    });
    _$jscoverage_done("lib/gpxWaypoint.js", 12);
    this.__defineGetter__("lon", function() {
        _$jscoverage_done("lib/gpxWaypoint.js", 13);
        return lon;
    });
    _$jscoverage_done("lib/gpxWaypoint.js", 16);
    this.__defineGetter__("elevation", function() {
        _$jscoverage_done("lib/gpxWaypoint.js", 17);
        return elevation;
    });
    _$jscoverage_done("lib/gpxWaypoint.js", 20);
    this.__defineGetter__("time", function() {
        _$jscoverage_done("lib/gpxWaypoint.js", 21);
        return time;
    });
}

_$jscoverage_done("lib/gpxWaypoint.js", 25);
module.exports = GpxWaypoint;