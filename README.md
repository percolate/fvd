# fvd

## Font Variation Description for JavaScript

See [FVD](https://github.com/typekit/fvd) for details.

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
