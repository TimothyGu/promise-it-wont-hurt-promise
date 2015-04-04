function throwMyGod () {
  throw new Error('OH NOES')
}

function iterate (n) {
  console.log(n)
  return ++ n
}

var promise = new Promise(function (f, r) {
  f(iterate(1))
}).then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(throwMyGod)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(null, console.log)
