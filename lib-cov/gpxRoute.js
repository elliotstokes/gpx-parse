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
_$jscoverage_init(_$jscoverage, "lib/gpxRoute.js",[2,6,7,10,11,14,15,18,19,22,23,28]);
_$jscoverage_init(_$jscoverage_cond, "lib/gpxRoute.js",[]);
_$jscoverage["lib/gpxRoute.js"].source = ["function GpxRoute(name, cmt, desc, points) {","\tvar name = name || \"\",","\t\tdesc = desc || \"\",","\t\tpoints = points || [];","","\tthis.__defineGetter__(\"name\", function() {","\t\treturn name;","\t});","","\tthis.__defineGetter__(\"cmt\", function() {","\t\treturn cmt;","\t});","","\tthis.__defineGetter__(\"description\", function() {","\t\treturn desc;","\t});","","\tthis.__defineGetter__(\"points\", function() {","\t\treturn points;","\t});","","\tthis.point = function(index) {","\t\treturn points[index];","\t}","","}","","module.exports = GpxRoute;"];
function GpxRoute(name, cmt, desc, points) {
    _$jscoverage_done("lib/gpxRoute.js", 2);
    var name = name || "", desc = desc || "", points = points || [];
    _$jscoverage_done("lib/gpxRoute.js", 6);
    this.__defineGetter__("name", function() {
        _$jscoverage_done("lib/gpxRoute.js", 7);
        return name;
    });
    _$jscoverage_done("lib/gpxRoute.js", 10);
    this.__defineGetter__("cmt", function() {
        _$jscoverage_done("lib/gpxRoute.js", 11);
        return cmt;
    });
    _$jscoverage_done("lib/gpxRoute.js", 14);
    this.__defineGetter__("description", function() {
        _$jscoverage_done("lib/gpxRoute.js", 15);
        return desc;
    });
    _$jscoverage_done("lib/gpxRoute.js", 18);
    this.__defineGetter__("points", function() {
        _$jscoverage_done("lib/gpxRoute.js", 19);
        return points;
    });
    _$jscoverage_done("lib/gpxRoute.js", 22);
    this.point = function(index) {
        _$jscoverage_done("lib/gpxRoute.js", 23);
        return points[index];
    };
}

_$jscoverage_done("lib/gpxRoute.js", 28);
module.exports = GpxRoute;