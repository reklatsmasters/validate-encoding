'use strict';
/* global it,describe */

var validate = require('../');
var assert = require('assert');

describe('module index', function () {
  it('should work', function () {
    assert(validate('utf-8'));
    assert(!validate('utf-9'));
  })
})