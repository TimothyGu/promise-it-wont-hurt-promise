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
Promise.all([a, b])
  .then(console.log)
