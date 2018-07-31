'use strict';

/**
 * Express Header Middleware
 * @param {array} headers
 * @return {function}
 */
module.exports = function(headers) {
	var expressHeader = function (req, res, next) {
		headers.forEach(function(header) {
			if(header.value) {
				res.header(header.key, header.value);
			}
			else {
				res.removeHeader(header.key);
			}
		});
		next();
	};
	return expressHeader;
};