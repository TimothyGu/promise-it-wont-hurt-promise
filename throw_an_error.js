function parsePromised (json) {
  return new Promise(function (fulfill, reject) {
    fulfill(JSON.parse(json))
  })
}

parsePromised(process.argv[2])
  .then(null, console.log)
