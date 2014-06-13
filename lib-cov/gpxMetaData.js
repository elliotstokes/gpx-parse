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
_$jscoverage_init(_$jscoverage, "lib/gpxMetaData.js",[6,12,13,16,17,20,21,24,25,28,29,32,33,36,37,40,41,44,45,49]);
_$jscoverage_init(_$jscoverage_cond, "lib/gpxMetaData.js",[]);
_$jscoverage["lib/gpxMetaData.js"].source = ["/**"," * Contructor for the gpx metadata class"," * @param {string} creator The creator of the gpx file"," */","function GpxMetaData(creator, time, bounds, name, desc, author, copyright, links, keywords) {","\tvar creator = creator || null,","\t\ttime = time || null,","\t\tbounds = bounds || null,","\t\tname = name || \"\",","\t\tdesc = desc || \"\";","","\tthis.__defineGetter__(\"creator\", function() {","\t\treturn creator;","\t});","","\tthis.__defineGetter__(\"time\", function() {","\t\treturn time;","\t});","","\tthis.__defineGetter__(\"bounds\", function() {","\t\treturn bounds;","\t});","","\tthis.__defineGetter__(\"name\", function() {","\t\treturn name;","\t});","","\tthis.__defineGetter__(\"description\", function() {","\t\treturn desc;","\t});","","\tthis.__defineGetter__(\"author\", function() {","\t\treturn author;","\t});","","\tthis.__defineGetter__(\"copyright\", function() {","\t\treturn copyright;","\t});","","\tthis.__defineGetter__(\"links\", function() {","\t\treturn links;","\t});","","\tthis.__defineGetter__(\"keywords\", function() {","\t\treturn keywords;","\t});","}","","module.exports = GpxMetaData;"];
function GpxMetaData(creator, time, bounds, name, desc, author, copyright, links, keywords) {
    _$jscoverage_done("lib/gpxMetaData.js", 6);
    var creator = creator || null, time = time || null, bounds = bounds || null, name = name || "", desc = desc || "";
    _$jscoverage_done("lib/gpxMetaData.js", 12);
    this.__defineGetter__("creator", function() {
        _$jscoverage_done("lib/gpxMetaData.js", 13);
        return creator;
    });
    _$jscoverage_done("lib/gpxMetaData.js", 16);
    this.__defineGetter__("time", function() {
        _$jscoverage_done("lib/gpxMetaData.js", 17);
        return time;
    });
    _$jscoverage_done("lib/gpxMetaData.js", 20);
    this.__defineGetter__("bounds", function() {
        _$jscoverage_done("lib/gpxMetaData.js", 21);
        return bounds;
    });
    _$jscoverage_done("lib/gpxMetaData.js", 24);
    this.__defineGetter__("name", function() {
        _$jscoverage_done("lib/gpxMetaData.js", 25);
        return name;
    });
    _$jscoverage_done("lib/gpxMetaData.js", 28);
    this.__defineGetter__("description", function() {
        _$jscoverage_done("lib/gpxMetaData.js", 29);
        return desc;
    });
    _$jscoverage_done("lib/gpxMetaData.js", 32);
    this.__defineGetter__("author", function() {
        _$jscoverage_done("lib/gpxMetaData.js", 33);
        return author;
    });
    _$jscoverage_done("lib/gpxMetaData.js", 36);
    this.__defineGetter__("copyright", function() {
        _$jscoverage_done("lib/gpxMetaData.js", 37);
        return copyright;
    });
    _$jscoverage_done("lib/gpxMetaData.js", 40);
    this.__defineGetter__("links", function() {
        _$jscoverage_done("lib/gpxMetaData.js", 41);
        return links;
    });
    _$jscoverage_done("lib/gpxMetaData.js", 44);
    this.__defineGetter__("keywords", function() {
        _$jscoverage_done("lib/gpxMetaData.js", 45);
        return keywords;
    });
}

_$jscoverage_done("lib/gpxMetaData.js", 49);
module.exports = GpxMetaData;