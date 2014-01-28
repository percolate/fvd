# fvd

![Build Status](https://circleci.com/gh/percolate/fvd.png?circle-token=d8514e93933f9eedca564123124444aa69ff6a11)

## Font Variation Description for JavaScript

See [Font Variation Description](https://github.com/typekit/fvd) for more details.

## Installation

Install with npm:

```
$ npm install fvd
```

## Usage

```js
var fvd = require('fvd')

fvd.compact('font-weight:bold;font-style:italic;')
// 'i7'

fvd.expand('i7')
// 'font-style:italic;font-weight:700;'

fvd.parse('i7')
// { 'font-style': 'italic', 'font-weight': 700 }
```

## Tests

Install the dependencies and run:

```
$ npm test
```
