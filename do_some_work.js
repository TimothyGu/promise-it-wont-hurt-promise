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

promisedGet('http://localhost:7000')
  .then(function (id) {
    return promisedGet('http://localhost:7001/' + id)
  })
  .then(JSON.parse)
  .then(console.log)
  .then(null, console.error)
