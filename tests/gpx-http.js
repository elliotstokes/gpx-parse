var st = require('st');
var http = require('http');
var enableDestroy = require('server-destroy');
var gpxParse = require("../");

var server;

module.exports = {

    setUp: function(callback) {
        server = http.createServer(
            st(__dirname + '/integration')
        ).listen(9090, function () {
            enableDestroy(server);

            callback();
        });
    },
    tearDown: function(callback) {
        // clean up
        server.destroy();

        callback();
    },
    
    "Test that remote gpx file can be loaded": function(test) {
        gpxParse.parseRemoteGpxFile('http://localhost:9090/data/route-1.1.gpx', function (err, data) {
            test.ok(data.metadata);
            test.ok(data.waypoints);
            test.ok(data.routes);
            test.ok(data.tracks);

            test.done();
        });
    }
};
