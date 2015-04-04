var promisedGet = function (obj) {
  return new Promise(function (fulfill, reject) {
    require('request')(obj, function (err, res, body) {
      if (err) return reject(err)
      var status = res.statusCode
      if (status !== 200) return reject(new Error('Status ' + status))
      fulfill(body)
    })
  })
}

promisedGet('http://localhost:1337')
  .then(JSON.parse)
  .then(console.log)
  .catch(console.error)
