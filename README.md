# arabify [![Build Status](https://travis-ci.org/goblindegook/arabify.svg?branch=master)](https://travis-ci.org/goblindegook/arabify)

Convert Roman numerals to their Arabic-Indic equivalents.

## Install

```
$ npm install --save arabify
```

## Usage

ECMAScript 5:

```js
var arabify = require('arabify').default

arabify(2016) // => 'MMXVI'
arabify(0)    // => Error
```

ECMAScript 2015+:

```js
import arabify from 'arabify'

arabify(2016) // => 'MMXVI'
arabify(0)    // => Error
```

## License

MIT © [Luís Rodrigues](https://goblindegook.com)
