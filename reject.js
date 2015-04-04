var promise = new Promise(function (fulfill, reject) {
  setTimeout(function () {
    reject(new Error('REJECTED!'))
  }, 300)
})

function errorHandler (err) {
  console.log(err.message)
}

promise.then(undefined, errorHandler)
