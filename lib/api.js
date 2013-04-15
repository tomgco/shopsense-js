exports.getUrl = function (isHttps) {
  var url = '//api.shopstyle.com/action/'
  if (isHttps) {
    url = 'https:' + url
  } else {
    url = 'http:' + url
  }

  return url
}