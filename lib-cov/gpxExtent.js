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
_$jscoverage_init(_$jscoverage, "lib/gpxExtent.js",[6,11,12,15,16,19,20,23,24,28]);
_$jscoverage_init(_$jscoverage_cond, "lib/gpxExtent.js",[]);
_$jscoverage["lib/gpxExtent.js"].source = ["/**","* constrctor for gpx extent","*/","function GpxExtent (minx, miny, maxx, maxy) {","","\tvar minx = minx,","\t\tminy = miny,","\t\tmaxx = maxx,","\t\tmaxy = maxy;","","\tthis.__defineGetter__(\"minx\", function() {","\t\treturn minx;","\t});","","\tthis.__defineGetter__(\"miny\", function() {","\t\treturn miny;","\t});","","\tthis.__defineGetter__(\"maxx\", function() {","\t\treturn maxx;","\t});","","\tthis.__defineGetter__(\"maxy\", function() {","\t\treturn maxy;","\t});","}","","module.exports = GpxExtent;"];
function GpxExtent(minx, miny, maxx, maxy) {
    _$jscoverage_done("lib/gpxExtent.js", 6);
    var minx = minx, miny = miny, maxx = maxx, maxy = maxy;
    _$jscoverage_done("lib/gpxExtent.js", 11);
    this.__defineGetter__("minx", function() {
        _$jscoverage_done("lib/gpxExtent.js", 12);
        return minx;
    });
    _$jscoverage_done("lib/gpxExtent.js", 15);
    this.__defineGetter__("miny", function() {
        _$jscoverage_done("lib/gpxExtent.js", 16);
        return miny;
    });
    _$jscoverage_done("lib/gpxExtent.js", 19);
    this.__defineGetter__("maxx", function() {
        _$jscoverage_done("lib/gpxExtent.js", 20);
        return maxx;
    });
    _$jscoverage_done("lib/gpxExtent.js", 23);
    this.__defineGetter__("maxy", function() {
        _$jscoverage_done("lib/gpxExtent.js", 24);
        return maxy;
    });
}

_$jscoverage_done("lib/gpxExtent.js", 28);
module.exports = GpxExtent;