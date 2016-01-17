## validate-encoding
[![npm](https://img.shields.io/npm/v/validate-encoding.svg)](https://npmjs.org/package/validate-encoding)
[![license](https://img.shields.io/npm/l/validate-encoding.svg)](https://npmjs.org/package/validate-encoding)
[![downloads](https://img.shields.io/npm/dm/validate-encoding.svg)](https://npmjs.org/package/validate-encoding)


>Validates whether a string matches the name of the encoding. Full list a valid encoding names [here](http://www.iana.org/assignments/character-sets/character-sets.xhtml)

### usage

```js
const ve = require('validate-encoding');

ve('utf8');   // invalid
ve('utf-8');  // valid
```

### API
##### exports(input)
* @param {string} input - candidate to validate
* @returns {bool}

### Licsense 
MIT, 2015 (c) Dmitry Tsvettsikh