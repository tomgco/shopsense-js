var shopsense = require('../')({https: true, pid: '123545'})

shopsense.search({}, {}, function (error, res, body) {
  console.log('done', res)
})