'use strict';

const assert = require('chai').assert;

const ProxyServer = require('../proxy_server');
const Regaliator = require('../../lib/regaliator');

const DEFAULT_ARGS = require('../default_args');

describe('Regaliator', () => {
    describe('Bills', () => {
        describe('Create bill with login and password', () => {
            it('Not implemented');
        });

        describe('Create bill with account number', () => {
            let proxy = new ProxyServer(require('../tapes/bill/create'));

            before('Creating fake server', (done) => proxy.listen(done));
            after('Killing fake server', (done) => proxy.close(done));

            it('should return JSON body', () => {
                return new Regaliator(...DEFAULT_ARGS)
                    .createAccountNumberBill(2, '8081969')
                    .then(({ body }) => assert.propertyVal(body, 'id', 5));
            });
        });

        describe('List bills', () => {
            let proxy = new ProxyServer(require('../tapes/bill/list'));

            before('Creating fake server', (done) => proxy.listen(done));
            after('Killing fake server', (done) => proxy.close(done));

            it('should return JSON body', () => {
                return new Regaliator(...DEFAULT_ARGS)
                    .bills()
                    .then(({ body }) => {
                        assert.propertyVal(body['bills'][0], 'id', 440);
                    });
            });
        });

        describe('Show bill', () => {
            let proxy = new ProxyServer(require('../tapes/bill/show'));

            before('Creating fake server', (done) => proxy.listen(done));
            after('Killing fake server', (done) => proxy.close(done));

            it('should return JSON body', () => {
                return new Regaliator(...DEFAULT_ARGS)
                    .showBill(5)
                    .then(({ body }) => assert.propertyVal(body, 'id', 5));
            });
        });

        describe('Show bill with xdata', () => {
            let proxy = new ProxyServer(require('../tapes/bill/xdata'));

            before('Creating fake server', (done) => proxy.listen(done));
            after('Killing fake server', (done) => proxy.close(done));

            it('should return JSON body', () => {
                return new Regaliator(...DEFAULT_ARGS)
                    .showBillXdata(5)
                    .then(({ body }) => assert.propertyVal(body, 'id', 674101));
            });
        });

        describe('Show bill with xpay', () => {
            let proxy = new ProxyServer(require('../tapes/bill/pay'));

            before('Creating fake server', (done) => proxy.listen(done));
            after('Killing fake server', (done) => proxy.close(done));

            it('should return JSON body', () => {
                return new Regaliator(...DEFAULT_ARGS)
                    .xpayBill(5, { amount: 758.0, currency: 'RD' })
                    .then(({ body }) => assert.propertyVal(body, 'id', 23));
            });
        });

        describe('Update xchange bill', () => {
            it('Not implemented');
        });

        describe('Update bill with MFA', () => {
            it('Not implemented');
        });

        describe('Update bill', () => {
            let proxy = new ProxyServer(require('../tapes/bill/update'));

            before('Creating fake server', (done) => proxy.listen(done));
            after('Killing fake server', (done) => proxy.close(done));

            it('should return JSON body', () => {
                return new Regaliator(...DEFAULT_ARGS)
                    .updateBill(5, { name_on_account: 'Test name' })
                    .then(({ body }) => assert.propertyVal(body, 'id', 5));
            });
        });
    });
});
