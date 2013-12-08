[![NPM version](https://badge.fury.io/js/tryc.png)](http://badge.fury.io/js/tryc)
[![Build Status](https://secure.travis-ci.org/vesln/tryc.png)](http://travis-ci.org/vesln/tryc)
[![Code Climate](https://codeclimate.com/github/vesln/tryc.png)](https://codeclimate.com/github/vesln/tryc)

# tryc

Async try-catch.

## Usage

```js
tryc(function(done) {
  // do risky stuff
  // throw errors if necessary
  done();
}, function(err) {
  // err === error if any
});
```

## Installation

npm:

```bash
npm install tryc
```

component:

```bash
component install vesln/tryc
```

## Tests

### Running the tests

### All:

```bash
$ make test
```

### Node:

```bash
$ make test-node
```

### Browser:

```bash
$ make test-browser
```

### Test coverage

```bash
$ make coverage
```

## License

(The MIT License)

Copyright (c) 2013 Veselin Todorov <hi@vesln.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
