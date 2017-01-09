'use strict';

const assert = require('chai').assert;

describe('Index', function () {
  it('should return regaliator export', function () {
    let index = require('../index');
    let regaliator = require('../lib/regaliator');

    assert.equal(index, regaliator);
  });
});
