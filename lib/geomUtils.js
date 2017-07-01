/**
 * Contians utility functions for calculating values on geometries
 * @module geomutils
**/

//File for geom utils
if (!Number.prototype.toRad) {
	Number.prototype.toRad = function() {
		return this * Math.PI / 180;
	};

}

if (!Number.prototype.toDeg) {
	Number.prototype.toDeg = function() {
		return this * 180/ Math.PI;
	};

}

var greatCircleRadius = {
	miles: 3956,
	km: 6367
};

/**
 * Calculates the distance between the two points using the haversine method.
 * @param {number} lat1 The latitude of the first point.
 * @param {number} lon1 The longtitude of the first point.
 * @param {number} lat2 The latitude of the first point.
 * @param {number} lon2 The longtitude of the first point.
 * @param {boolean} [inMiles=False] Specifies if result should be in miles.
 * @returns {number} The distance in kilometers between the two points.
**/
exports.calculateDistance = function(lat1, lon1, lat2, lon2, inMiles) {
	var dLat = (lat2 - lat1).toRad(),
		dLon = (lon2 - lon1).toRad();

	lat1 = lat1.toRad();
	lat2 = lat2.toRad();

	var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	return (inMiles ? greatCircleRadius.miles : greatCircleRadius.km) * c;
};

/**
 * Calcuates the midpoint between the two points passed in.
 * @param {number} lat1 The latitude of the first point.
 * @param {number} lon1 The longtitude of the first point.
 * @param {number} lat2 The latitude of the first point.
 * @param {number} lon2 The longtitude of the first point.
 * @returns {Array<number>} An array of latitude and longtitude values of the midpoint.
 */
exports.calculateMidpoint = function(lat1, lon1, lat2, lon2) {
    var dLon = (lon2 - lon1).toRad();
  
    lat1 = lat1.toRad();
	lat2 = lat2.toRad();
  
    var Bx = Math.cos(lat2) * Math.cos(dLon);
	var By = Math.cos(lat2) * Math.sin(dLon);
	var lat3 = (Math.atan2(Math.sin(lat1) + Math.sin(lat2),
		Math.sqrt((Math.cos(lat1) + Bx) * (Math.cos(lat1) + Bx) + By * By))).toDeg();
	var lon3 = lon1 + Math.atan2(By, Math.cos(lat1) + Bx).toDeg();
	return [lat3,lon3];
};