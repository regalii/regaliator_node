'use strict';

const assert = require('chai').assert;

const ProxyServer = require('../proxy_server');
const Regaliator = require('../../lib/regaliator');

const DEFAULT_ARGS = require('../default_args');

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
                return new Regaliator(...DEFAULT_ARGS)
                    .rates()
                    .then(({ body }) => {
                      assert.propertyVal(body, 'MXN', 16.488);
                    });
            });
        });
    });
});
