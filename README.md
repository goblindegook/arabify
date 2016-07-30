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

arabify('MMXVI') // => 2016
arabify('XXXXX') // => Error
```

ECMAScript 2015+:

```js
import arabify from 'arabify'

arabify('MMXVI') // => 2016
arabify('XXXXX') // => Error
```

## License

MIT © [Luís Rodrigues](https://goblindegook.com)
