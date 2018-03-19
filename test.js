'use strict';

require('mocha');
var assert = require('assert');
var nano = require('./');

describe('nanoseconds', function() {
  it('should convert to nanoseconds:', function() {
    assert.equal(nano([0, 999]), 999);
    assert.equal(nano([12, 999]), 12000000999);
    assert.equal(nano(['1298001', '09187662']), 1298001009187662);
  });

  it('should throw an error:', function() {
    assert.throws(() => nano(), /expected an array from process\.hrtime()/)
  });
});
