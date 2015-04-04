var a = new Promise(function (f) {
  setTimeout(function () {
    f('PROMISES')
  }, 200)
})
var b = new Promise(function (f) {
  setTimeout(function () {
    f('FTW')
  }, 200)
})
function all (a, b) {
  var counter = 0
    , data    = []
    , error   = []
  return new Promise(function (fulfill, reject) {
    a.then(function (val) {
      counter ++
      data.push(val)
      if (counter === 2) {
        fulfill(data)
      }
    })
    a.fail(reject)
    b.then(function (val) {
      counter ++
      data.push(val)
      if (counter === 2) {
        fulfill(data)
      }
    })
    b.fail(reject)
  })
}
all(a, b)
  .then(console.log)
