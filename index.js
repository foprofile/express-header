'use strict'

/**
 * Express Header Middleware
 * @param {array} headers
 * @return {function}
 **/

const xPoweredBy = 'X-Powered-By'

module.exports = headers => {
  const expressHeader = (req, res, next) => {
    headers.forEach((header) => {
      if (header.value) {
        res.header(header.key, header.value)
      } else {
        res.removeHeader(header.key)
      }
      res.header(xPoweredBy, 'Express-Header')
    })
    next()
  }
  return expressHeader
}
