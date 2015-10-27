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
 * @returns {number} The distance in miles between the two points.
**/
exports.calculateDistance = function(lat1, lon1, lat2, lon2) {
	var dLat = (lat2 - lat1).toRad(),
		dLon = (lon2 - lon1).toRad();

	lat1 = lat1.toRad();
	lat2 = lat2.toRad();

	var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	return greatCircleRadius.km * c;
};

/**
 * Calcuates the midpoint between the two points passed in.
 * @param {number} lat1 The latitude of the first point.
 * @param {number} lon1 The longtitude of the first point.
 * @param {number} lat2 The latitude of the first point.
 * @param {number} lon2 The longtitude of the first point.
 */
exports.calculateMidpoint = function(lat1, lon1, lat2, lon2) {
	var dLat = (lat2 - lat1).toRad(),
		dLon = (lon2 - lon1).toRad();

	lat1 = lat1.toRad();
	lat2 = lat2.toRad();

	var Bx = Math.cos(lat2) * Math.cos(dLon);
	var By = Math.cos(lat2) * Math.sin(dLon);
	var lat3 = Math.atan2(Math.sin(lat1) + Math.sin(lat2),
		Math.sqrt((Math.cos(lat1) + Bx) * (Math.cos(lat1) + Bx) + By * By));
	var lon3 = lon1 + Math.atan2(By, Math.cos(lat1) + Bx);
};
