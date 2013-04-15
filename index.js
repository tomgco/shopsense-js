var Shopsense = require('./lib/shopsense')
  , api = require('./lib/api')

module.exports = function (options) {
  if (options.pid === undefined) throw new Error('PID is required for any API requests')
  var url = api.getUrl(options.https)
    , shopesense = new Shopsense({ url: url, pid: options.pid })

  return shopesense
}