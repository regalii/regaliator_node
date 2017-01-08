'use strict';

const assert = require('chai').assert;

const ProxyServer = require('../proxy_server');
const Regaliator = require('../../lib/regaliator');

const DEFAULT_ARGS = require('../default_args');

describe('Regaliator', () => {
    describe('Transactions', () => {
        describe('List', () => {
            let proxy = new ProxyServer(require('../tapes/transaction/list'));

            before('Creating fake server', (done) => proxy.listen(done));
            after('Killing fake server', (done) => proxy.close(done));

            it('should return JSON body', () => {
                return new Regaliator(...DEFAULT_ARGS)
                    .transactions()
                    .then(({ body }) => {
                      assert.propertyVal(body['transactions'][0], 'id', 1);
                    });
            });
        });

        describe('Search', () => {
            let proxy = new ProxyServer(require('../tapes/transaction/list'));

            before('Creating fake server', (done) => proxy.listen(done));
            after('Killing fake server', (done) => proxy.close(done));

            it('should return JSON body', () => {
                return new Regaliator(...DEFAULT_ARGS)
                    .transactions({ q: { id_eq: 1 } })
                    .then(({ body }) => {
                      assert.propertyVal(body['transactions'][0], 'id', 1);
                    });
            });
        });
    });
});
