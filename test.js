'use strict'

const lucas = require('./')
const test = require('tape')

test('lucas(seed, max)', ({plan, ok, end}) => {
  const expected = [2, 1, 3, 4, 7, 11, 18, 29, 47, 76]
  plan(3 + expected.length)
  ok('function' == typeof lucas, "should be a function")
  ok('object' == typeof lucas(0, 0), "should return an object")
  ok('function' == typeof lucas(0, 0).next, "should return an object with a next() fn")
  const series = [ ...lucas(0, expected.length) ]
  for (let i = 0; i < expected.length; ++i) {
    ok(expected[i] == series[i], `expected[${i}] == series[${i}]`)
  }
  end()
})
