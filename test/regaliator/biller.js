'use strict';

const assert = require('chai').assert;

const ProxyServer = require('../proxy_server');
const Regaliator = require('../../lib/regaliator');

const DEFAULT_ARGS = require('../default_args');

describe('Regaliator', () => {
    describe('Billers', () => {
        describe('Credentials', () => {
            let proxy = new ProxyServer(require('../tapes/biller/credentials'));

            before('Creating fake server', (done) => proxy.listen(done));
            after('Killing fake server', (done) => proxy.close(done));

            it('should return JSON body', () => {
                return new Regaliator(...DEFAULT_ARGS)
                    .billers('credentials')
                    .then(({ body }) => {
                      assert.propertyVal(body['billers'][0], 'id', 6330);
                    });
            });
        });

        describe('Topups', () => {
            let proxy = new ProxyServer(require('../tapes/biller/topups'));

            before('Creating fake server', (done) => proxy.listen(done));
            after('Killing fake server', (done) => proxy.close(done));

            it('should return JSON body', () => {
                return new Regaliator(...DEFAULT_ARGS)
                    .billers('topups')
                    .then(({ body }) => {
                      assert.propertyVal(body['billers'][0], 'id', 4842);
                    });
            });
        });

        describe('Topups', () => {
            let proxy = new ProxyServer(require('../tapes/biller/utilities'));

            before('Creating fake server', (done) => proxy.listen(done));
            after('Killing fake server', (done) => proxy.close(done));

            it('should return JSON body', () => {
                return new Regaliator(...DEFAULT_ARGS)
                    .billers('utilities')
                    .then(({ body }) => {
                      assert.propertyVal(body['billers'][0], 'id', 3261);
                    });
            });
        });
    });
});
