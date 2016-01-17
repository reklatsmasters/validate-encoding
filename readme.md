## validate-encoding
Validates whether a string matches the name of the encoding. Full list a valid encoding names [here](http://www.iana.org/assignments/character-sets/character-sets.xhtml)

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