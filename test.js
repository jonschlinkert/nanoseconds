'use strict';

require('mocha');
var assert = require('assert');
var nanoseconds = require('./');

describe('nanoseconds', function () {
  it('should convert to nanoseconds:', function () {
    assert.equal(nanoseconds([0, 999]), 999);
    assert.equal(nanoseconds([12, 999]), 12000000999);
    assert.equal(nanoseconds([1298001, 09187662]), 1298001009187662);
  });

  it('should throw an error:', function () {
    try {
      nanoseconds();
    } catch(err) {
      assert(err);
      assert(err.message);
      assert(err.message === 'expected an array from process.hrtime()');
    }
  });
});
