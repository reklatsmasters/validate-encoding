'use strict';

var charsets = require('./charset-iana.json');
var len = charsets.length;

module.exports = function (encoding) {
  if (typeof encoding !== 'string') {
    return false;
  }

  var enc = encoding.toLowerCase();
  
  for (var i = 0; i < len;++i) {
    if (charsets[i] == enc) {
      return true;
    }
  }
  
  return false;
}
