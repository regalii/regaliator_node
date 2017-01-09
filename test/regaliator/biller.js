'use strict';

const assert = require('chai').assert;

const ProxyServer = require('../proxy_server');
const Regaliator = require('../../lib/regaliator');

describe('Regaliator', () => {
    describe('Billers', () => {
        describe('Credentials', () => {
            let proxy = new ProxyServer(require('../tapes/biller/credentials'));

            before('Creating fake server', (done) => proxy.listen(done));
            after('Killing fake server', (done) => proxy.close(done));

            it('should return JSON body', () => {
                return new Regaliator('http://localhost:4567', 'key', 'secret')
                    .billers('credentials')
                    .then((res) => {
                      assert.propertyVal(res.body['billers'][0], 'id', 6330);
                    });
            });
        });

        describe('Topups', () => {
            let proxy = new ProxyServer(require('../tapes/biller/topups'));

            before('Creating fake server', (done) => proxy.listen(done));
            after('Killing fake server', (done) => proxy.close(done));

            it('should return JSON body', () => {
                return new Regaliator('http://localhost:4567', 'key', 'secret')
                    .billers('topups')
                    .then((res) => {
                      assert.propertyVal(res.body['billers'][0], 'id', 4842);
                    });
            });
        });

        describe('Topups', () => {
            let proxy = new ProxyServer(require('../tapes/biller/utilities'));

            before('Creating fake server', (done) => proxy.listen(done));
            after('Killing fake server', (done) => proxy.close(done));

            it('should return JSON body', () => {
                return new Regaliator('http://localhost:4567', 'key', 'secret')
                    .billers('utilities')
                    .then((res) => {
                      assert.propertyVal(res.body['billers'][0], 'id', 3261);
                    });
            });
        });
    });
});
