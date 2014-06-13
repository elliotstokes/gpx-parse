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
_$jscoverage_init(_$jscoverage, "lib/geomUtils.js",[2,3,4,11,19,20,25,27,28,34,35,36,37,39]);
_$jscoverage_init(_$jscoverage_cond, "lib/geomUtils.js",[2]);
_$jscoverage["lib/geomUtils.js"].source = ["//File for geom utils","if (!Number.prototype.toRad) {","\tNumber.prototype.toRad = function() {","\t\treturn this * Math.PI / 180;","\t}","","}","","","","var greatCircleRadius = {","\tmiles: 3956,","\tkm: 6367","};","","/*"," * Calculates the distance between the two points using the haversine method"," */","exports.calculateDistance = function(lat1, lon1, lat2, lon2) {","\tvar dLat = (lat2 - lat1).toRad(),","\t\tdLon = (lon2 - lon1).toRad(),","\t\tlat1 = lat1.toRad(),","\t\tlat2 = lat2.toRad();","","\tvar a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +","\t\tMath.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);","\tvar c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));","\treturn greatCircleRadius.miles * c;","};","","/**"," * Calcuates the midpoint between the two points passed in."," */","exports.calculateMidpoint = function() {","\tvar Bx = Math.cos(lat2) * Math.cos(dLon);","\tvar By = Math.cos(lat2) * Math.sin(dLon);","\tvar lat3 = Math.atan2(Math.sin(lat1) + Math.sin(lat2),","\t\tMath.sqrt((Math.cos(lat1) + Bx) * (Math.cos(lat1) + Bx) + By * By));","\tvar lon3 = lon1 + Math.atan2(By, Math.cos(lat1) + Bx);","}"];
_$jscoverage_done("lib/geomUtils.js", 2);
if (_$jscoverage_done("lib/geomUtils.js", 2, !Number.prototype.toRad)) {
    _$jscoverage_done("lib/geomUtils.js", 3);
    Number.prototype.toRad = function() {
        _$jscoverage_done("lib/geomUtils.js", 4);
        return this * Math.PI / 180;
    };
}

_$jscoverage_done("lib/geomUtils.js", 11);
var greatCircleRadius = {
    miles: 3956,
    km: 6367
};

_$jscoverage_done("lib/geomUtils.js", 19);
exports.calculateDistance = function(lat1, lon1, lat2, lon2) {
    _$jscoverage_done("lib/geomUtils.js", 20);
    var dLat = (lat2 - lat1).toRad(), dLon = (lon2 - lon1).toRad(), lat1 = lat1.toRad(), lat2 = lat2.toRad();
    _$jscoverage_done("lib/geomUtils.js", 25);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    _$jscoverage_done("lib/geomUtils.js", 27);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    _$jscoverage_done("lib/geomUtils.js", 28);
    return greatCircleRadius.miles * c;
};

_$jscoverage_done("lib/geomUtils.js", 34);
exports.calculateMidpoint = function() {
    _$jscoverage_done("lib/geomUtils.js", 35);
    var Bx = Math.cos(lat2) * Math.cos(dLon);
    _$jscoverage_done("lib/geomUtils.js", 36);
    var By = Math.cos(lat2) * Math.sin(dLon);
    _$jscoverage_done("lib/geomUtils.js", 37);
    var lat3 = Math.atan2(Math.sin(lat1) + Math.sin(lat2), Math.sqrt((Math.cos(lat1) + Bx) * (Math.cos(lat1) + Bx) + By * By));
    _$jscoverage_done("lib/geomUtils.js", 39);
    var lon3 = lon1 + Math.atan2(By, Math.cos(lat1) + Bx);
};