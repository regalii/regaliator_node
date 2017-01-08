'use strict';

const assert = require('chai').assert;

const ProxyServer = require('../proxy_server');
const Regaliator = require('../../lib/regaliator');

const DEFAULT_ARGS = require('../default_args');

describe('Regaliator', () => {
    describe('Account', () => {
        describe('Successed call', () => {
            let proxy = new ProxyServer(require('../tapes/account/successful_info'));

            before('Creating fake server', (done) => proxy.listen(done));
            after('Killing fake server', (done) => proxy.close(done));

            it('should return JSON body', () => {
                return new Regaliator(...DEFAULT_ARGS)
                    .account()
                    .then(({ body }) => {
                        assert.propertyVal(body, 'name', 'ABC Ltd');
                    });
            });
        });

        describe('Failed call', () => {
            let proxy = new ProxyServer(require('../tapes/account/failed_info'));

            before('Creating fake server', (done) => proxy.listen(done));
            after('Killing fake server', (done) => proxy.close(done));

            it('should return JSON error', () => {
                return new Regaliator(...DEFAULT_ARGS)
                    .account()
                    .then(({ body }) => {
                        assert.propertyVal(body, 'message', 'Unauthorized');
                    });
            });
        });
    });
});
