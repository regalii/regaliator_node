'use strict';

const assert = require('chai').assert;

const ProxyServer = require('../proxy_server');
const Regaliator = require('../../lib/regaliator');

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
                return new Regaliator('http://localhost:4567', 'key', 'secret')
                    .createAccountNumberBill(2, '8081969')
                    .then((res) => assert.propertyVal(res.body, 'id', 5));
            });
        });

        describe('List bills', () => {
            let proxy = new ProxyServer(require('../tapes/bill/list'));

            before('Creating fake server', (done) => proxy.listen(done));
            after('Killing fake server', (done) => proxy.close(done));

            it('should return JSON body', () => {
                return new Regaliator('http://localhost:4567', 'key', 'secret')
                    .bills()
                    .then((res) => {
                        assert.propertyVal(res.body['bills'][0], 'id', 440);
                    });
            });
        });

        describe('Show bill', () => {
            let proxy = new ProxyServer(require('../tapes/bill/show'));

            before('Creating fake server', (done) => proxy.listen(done));
            after('Killing fake server', (done) => proxy.close(done));

            it('should return JSON body', () => {
                return new Regaliator('http://localhost:4567', 'key', 'secret')
                    .showBill(5)
                    .then((res) => assert.propertyVal(res.body, 'id', 5));
            });
        });

        describe('Show bill with xdata', () => {
            let proxy = new ProxyServer(require('../tapes/bill/xdata'));

            before('Creating fake server', (done) => proxy.listen(done));
            after('Killing fake server', (done) => proxy.close(done));

            it('should return JSON body', () => {
                return new Regaliator('http://localhost:4567', 'key', 'secret')
                    .showBillXdata(5)
                    .then((res) => assert.propertyVal(res.body, 'id', 674101));
            });
        });

        describe('Show bill with xpay', () => {
            let proxy = new ProxyServer(require('../tapes/bill/pay'));

            before('Creating fake server', (done) => proxy.listen(done));
            after('Killing fake server', (done) => proxy.close(done));

            it('should return JSON body', () => {
                return new Regaliator('http://localhost:4567', 'key', 'secret')
                    .xpayBill(5, { amount: 758.0, currency: 'RD' })
                    .then((res) => assert.propertyVal(res.body, 'id', 23));
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
                return new Regaliator('http://localhost:4567', 'key', 'secret')
                    .updateBill(5, { name_on_account: 'Test name' })
                    .then((res) => assert.propertyVal(res.body, 'id', 5));
            });
        });
    });
});
