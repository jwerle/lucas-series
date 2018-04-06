'use strict'

module.exports = lucas

function lucas(seed, max) {
  seed = seed || 0
  max = max || Infinity
  const L = []
  const iterable = { next }
  if (seed && seed > 0) {
    for (let i = 0; i < seed; ++i) {
      next()
    }
  }
  if ('undefined' != typeof Symbol && 'undefined' != Symbol.iterator) {
    iterable[Symbol.iterator] = iterator
  }
  return iterable
  function iterator() { return { next } }
  function next() {
    const n = L.length
    if (0 == n) { L[n] = 2 }
    if (1 == n) { L[n] = 1 }
    if (n > 1) { L[n] = L[n-2] + L[n-1] }
    return {value: L[n], done: n >= max}
  }
}

