'use strict';

const assert = require('chai').assert;

const ProxyServer = require('../proxy_server');
const Regaliator = require('../../lib/regaliator');

describe('Regaliator', () => {
  describe('Rates', () => {
    describe('History', () => {
      it('Not implemented');
    });

    describe('List', () => {
      let proxy = new ProxyServer(require('../tapes/rate/list'));

      before('Creating fake server', (done) => proxy.listen(done));
      after('Killing fake server', (done) => proxy.close(done));

      it('should return JSON body', () => {
        return new Regaliator('http://localhost:4567', 'key', 'secret')
          .rates()
          .then((res) => {
            assert.propertyVal(res.body, 'MXN', 16.488);
          });
      });
    });
  });
});
