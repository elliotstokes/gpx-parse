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
_$jscoverage_init(_$jscoverage, "lib/gpxPoint.js",[3,7,8,11,12,15,16,20]);
_$jscoverage_init(_$jscoverage_cond, "lib/gpxPoint.js",[]);
_$jscoverage["lib/gpxPoint.js"].source = ["function GpxPoint(x, y, elevation, time, magvar, geoidheight, name, cmt, desc, src, links, sym, type) {","\t","\tvar x = parseFloat(x) || -1,","\t\ty = parseFloat(y) || -1,","\t\televation = elevation || -1;","","\tthis.__defineGetter__(\"x\", function() {","\t\treturn x;","\t});","","\tthis.__defineGetter__(\"y\", function() {","\t\treturn y;","\t});","","\tthis.__defineGetter__(\"elevation\", function() {","\t\treturn elevation;","\t});","}","","module.exports = GpxPoint;"];
function GpxPoint(x, y, elevation, time, magvar, geoidheight, name, cmt, desc, src, links, sym, type) {
    _$jscoverage_done("lib/gpxPoint.js", 3);
    var x = parseFloat(x) || -1, y = parseFloat(y) || -1, elevation = elevation || -1;
    _$jscoverage_done("lib/gpxPoint.js", 7);
    this.__defineGetter__("x", function() {
        _$jscoverage_done("lib/gpxPoint.js", 8);
        return x;
    });
    _$jscoverage_done("lib/gpxPoint.js", 11);
    this.__defineGetter__("y", function() {
        _$jscoverage_done("lib/gpxPoint.js", 12);
        return y;
    });
    _$jscoverage_done("lib/gpxPoint.js", 15);
    this.__defineGetter__("elevation", function() {
        _$jscoverage_done("lib/gpxPoint.js", 16);
        return elevation;
    });
}

_$jscoverage_done("lib/gpxPoint.js", 20);
module.exports = GpxPoint;