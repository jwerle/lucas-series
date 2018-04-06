lucas-series
============

## Install

```sh
$ npm install lucas-series
```

## Usage

```js
const lucas = require('lucas-series')
const series = [...lucas(0, 5)] // 2 1 3 4 7

for (const n of lucas(5, 10)) { console.log(n) }
// prints:
// 11
// 18
// 29
// 47
// 76

```

## API

### `lucas(seed = 0, max = Infinity)`

Returns an object conforming to the
[Iteration Protocol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
interface that will **yield** a [Lucas Number](https://en.wikipedia.org/wiki/Lucas_number).
This iterable lucas series can be initialized with a seed `n` value and
a max interval value in the series defaulting to `0` and `Infinity`
respectively.

## License

MIT
