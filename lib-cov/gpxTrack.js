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
_$jscoverage_init(_$jscoverage, "lib/gpxTrack.js",[3,5,6,9,10,15]);
_$jscoverage_init(_$jscoverage_cond, "lib/gpxTrack.js",[]);
_$jscoverage["lib/gpxTrack.js"].source = ["function GpxTrack(segments, name) {","","\tvar segments = segments || [];","","\tthis.__defineGetter__(\"segments\", function() {","\t\treturn segments;","\t});","","\tthis.segment = function (index) {","\t\treturn segments[index];","\t}","","}","","module.exports = GpxTrack;"];
function GpxTrack(segments, name) {
    _$jscoverage_done("lib/gpxTrack.js", 3);
    var segments = segments || [];
    _$jscoverage_done("lib/gpxTrack.js", 5);
    this.__defineGetter__("segments", function() {
        _$jscoverage_done("lib/gpxTrack.js", 6);
        return segments;
    });
    _$jscoverage_done("lib/gpxTrack.js", 9);
    this.segment = function(index) {
        _$jscoverage_done("lib/gpxTrack.js", 10);
        return segments[index];
    };
}

_$jscoverage_done("lib/gpxTrack.js", 15);
module.exports = GpxTrack;