var request = require('request')
  , _ = require('lodash')

module.exports = function (config) {
  var self = {}

  var get = self.get = function (action, options, cb) {
    if (typeof options === 'function') {
      cb = options
      options = {}
    }
    options.pid = config.pid
    options.format = config.format || 'json2'
    request(
      { url: config.url + action
      , qs: options
      }
    , cb
    )
  }

  self.getBrands = function (cb) {
    get('apiGetBrands', cb)
  }

  self.getCategoryHistogram = function (query, cb) {
    get('apiGetCategoryHistogram', query, cb)
  }

  self.getFilterHistogram = function (query, filterType, cb) {
    get('apiGetFilterHistogram', _.extend({}, query, { filterType: filterType }), cb)
  }

  self.getLook = function (look, cb) {
    get('apiGetLook', {look: look}, cb)
  }

  self.getLooks = function (type, optional, cb) {
    if (typeof optional !== 'object')
      optional = {}

    get('apiGetLooks', _.extend({}, {type: type}, optional), cb)
  }

  self.getRetailers = function (cb) {
    get('apiGetRetailers', cb)
  }

  self.getStylebook = function (handle, optional, cb) {
    if (typeof optional !== 'object')
      optional = {}

    get('apiGetStylebook', _.extend({}, {handle: handle}, optional), cb)
  }

  self.getTrends = function (optional, cb) {
    if (typeof optional !== 'object')
      optional = {}

    get('apiGetTrends', optional, cb)
  }

  self.search = function (query, optional, cb) {
    if (typeof optional !== 'object')
      optional = {}

    get('apiSearch', _.extend({}, query, optional), cb)
  }

  self.visitRetailer = function () {
    throw new Error('Not Implemented')
  }

  return self
}