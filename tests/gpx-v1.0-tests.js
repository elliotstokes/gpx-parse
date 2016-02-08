var gpxParse = require("../"),
    errorGpx = "<gpx><aa></gpx>",
    successfulGpx = ['<?xml version="1.0"?>',
        '<gpx version="1.0"',
        'creator="ExpertGPS 1.1 - http://www.topografix.com"',
        'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"',
        'xmlns="http://www.topografix.com/GPX/1/0"',
        'xsi:schemaLocation="http://www.topografix.com/GPX/1/0 http://www.topografix.com/GPX/1/0/gpx.xsd">',
        '<time>2002-02-27T17:18:33Z</time>',
        '<bounds minlat="42.401051" minlon="-71.126602" maxlat="42.468655" maxlon="-71.102973"/>',
        '<wpt lat="42.438878" lon="-71.119277">',
        '<ele>44.586548</ele>',
        '<time>2001-11-28T21:05:28Z</time>',
        '<name>5066</name>',
        '<desc><![CDATA[5066]]></desc>',
        '<sym>Crossing</sym>',
        '<type><![CDATA[Crossing]]></type>',
        '</wpt>',
        '<wpt lat="42.439227" lon="-71.119689">',
        '<ele>57.607200</ele>',
        '<time>2001-06-02T03:26:55Z</time>',
        '<name>5067</name>',
        '<desc><![CDATA[5067]]></desc>',
        '<sym>Dot</sym>',
        '<type><![CDATA[Intersection]]></type>',
        '</wpt>',
        '<rte>',
        '<name>BELLEVUE</name>',
        '<desc><![CDATA[Bike Loop Bellevue]]></desc>',
        '<number>1</number>',
        '<rtept lat="42.430950" lon="-71.107628">',
        '<ele>23.469600</ele>',
        '<time>2001-06-02T00:18:15Z</time>',
        '<name>BELLEVUE</name>',
        '<cmt>BELLEVUE</cmt>',
        '<desc><![CDATA[Bellevue Parking Lot]]></desc>',
        '<sym>Parking Area</sym>',
        '<type><![CDATA[Parking]]></type>',
        '</rtept>',
        '<rtept lat="42.431240" lon="-71.109236">',
        '<ele>26.561890</ele>',
        '<time>2001-11-07T23:53:41Z</time>',
        '<name>GATE6</name>',
        '<desc><![CDATA[Gate 6]]></desc>',
        '<sym>Trailhead</sym>',
        '<type><![CDATA[Trail Head]]></type>',
        '</rtept>',
        '<rtept lat="42.434980" lon="-71.109942">',
        ' <ele>45.307495</ele>',
        ' <time>2001-11-07T23:53:41Z</time>',
        '<name>PANTHRCAVE</name>',
        '<desc><![CDATA[Panther Cave]]></desc>',
        '<sym>Tunnel</sym>',
        '<type><![CDATA[Tunnel]]></type>',
        '</rtept>',
        '<rtept lat="42.436757" lon="-71.113223">',
        '<ele>37.616943</ele>',
        '<time>2001-11-28T21:05:28Z</time>',
        '<name>6014MEADOW</name>',
        '<desc><![CDATA[6014MEADOW]]></desc>',
        '<sym>Dot</sym>',
        '<type><![CDATA[Dot]]></type>',
        '</rtept>',
        '</rte>',
        '<trk>',
        '<name>Example Track</name>',
        '<trkseg>',
        '<trkpt lat="47.644548" lon="-122.326897">',
        '<ele>4.46</ele>',
        '<time>2009-10-17T18:37:26Z</time>',
        '</trkpt>',
        '<trkpt lat="47.644548" lon="-122.326697">',
        '<ele>4.94</ele>',
        '<time>2009-10-17T18:37:31Z</time>',
        '</trkpt>',
        '<trkpt lat="47.644448" lon="-122.326697">',
        '<ele>6.87</ele>',
        '<time>2009-10-17T18:37:34Z</time>',
        '</trkpt>',
        '</trkseg>',
        '</trk>',
        '</gpx>'
    ].join('\n');



module.exports = {
    setUp: function(callback) {
        callback();
    },
    tearDown: function(callback) {
        // clean up
        callback();
    },


    "Test that valid gpx string is parsed successfully": function(test) {
        gpxParse.parseGpx(successfulGpx, function(error, result) {

            test.equal(error, null);
            test.equal(result.metadata.creator, "ExpertGPS 1.1 - http://www.topografix.com");
            test.equal(result.metadata.time.getTime(), 1014830313000);
            test.equal(result.waypoints.length, 2);
            test.equal(result.waypoints[0].lat, 42.438878);
            test.equal(result.waypoints[1].lon, -71.119689);
            test.equal(result.routes.length, 1);
            test.equal(result.routes[0].points.length, 4);
            test.equal(result.routes[0].point(0).lat, 42.43095);
            test.equal(result.routes[0].point(0).lon, -71.107628);
            test.equal(result.tracks.length, 1);
            test.equal(result.tracks[0].segments.length, 1);
            test.equal(result.tracks[0].segments[0].length, 3);
            test.equal(result.tracks[0].length(), 0.026086132059687486);
            test.equal(result.routes[0].length(), 0.8891610318632928);
            test.done();
        });

    },

    "Test that you can load in just waypoints": function(test) {
        var wayPointGpx = ['<?xml version="1.0"?>',
        '<gpx version="1.0" ',
        'creator="ExpertGPS 1.1 - http://www.topografix.com" ',
        'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ',
        'xmlns="http://www.topografix.com/GPX/1/0" ',
        'xsi:schemaLocation="http://www.topografix.com/GPX/1/0 http://www.topografix.com/GPX/1/0/gpx.xsd">',
        '<time>2002-02-27T17:18:33Z</time>',
        '<bounds minlat="42.401051" minlon="-71.126602" maxlat="42.468655" maxlon="-71.102973"/>',
        '<wpt lat="42.438878" lon="-71.119277">',
        '<ele>44.586548</ele>',
        '<time>2001-11-28T21:05:28Z</time>',
        '<name>5066</name>',
        '<desc><![CDATA[5066]]></desc>',
        '<sym>Crossing</sym>',
        '<type><![CDATA[Crossing]]></type>',
        '</wpt>',
        '</gpx>'].join('');

        gpxParse.parseGpx(wayPointGpx, function(err, result) {
            
            test.equal(err, null);
            test.equal(result.tracks.length, 0);
            test.equal(result.routes.length, 0);
            test.equal(result.waypoints.length, 1);
            test.equal(result.waypoints[0].name, "5066");
            test.done();
        });        
    }
};
