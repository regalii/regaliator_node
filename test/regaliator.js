'use strict';

const assert = require('chai').assert;

const Regaliator = require('../lib/regaliator');
const Request = require('../lib/request');

describe('Regaliator', () => {
  it('should be a Function', () => {
    assert.isFunction(Regaliator);
    assert.instanceOf(new Regaliator('http://localhost:4567', 'key', 'secret'), Regaliator);
    assert.instanceOf(Regaliator('http://localhost:4567', 'key', 'secret'), Regaliator);
  });

  it('should accept 3 arguments', () => {
    let regaliator = new Regaliator('http://fake', 'key', 'secret');

    assert.instanceOf(regaliator.request, Request, 'is not a valid Request');
    assert.equal(regaliator.request.apiHost, 'http://fake');
    assert.equal(regaliator.request.apiKey, 'key');
    assert.equal(regaliator.request.secret, 'secret');
  });
});
