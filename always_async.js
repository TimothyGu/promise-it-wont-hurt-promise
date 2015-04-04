var promise = new Promise(function (fulfill, reject) {
  fulfill('SECOND')
})

promise.then(console.log)
console.log('FIRST')
