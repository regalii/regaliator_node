'use strict';

const crypto = require('crypto');
const assert = require('chai').assert;

const Request = require('../lib/request');
const ProxyServer = require('./proxy_server');

const DEFAULT_ARGS = require('./default_args');
const DATE_REGEX = /^\w{3}, \d{2} \w{3} \d{4} \d{2}:\d{2}:\d{2} GMT$/;
const AUTH_REGEX = new RegExp('^APIAuth ' + DEFAULT_ARGS[1] + ':.+$');

describe('Request', () => {
  it('should be a Function', () => {
    assert.isFunction(Request);
    assert.instanceOf(new Request(...DEFAULT_ARGS), Request);
    assert.instanceOf(Request(...DEFAULT_ARGS), Request);
  });

  it('should accept 3 arguments', () => {
    let subject = new Request('http://fake', 'key', 'secret');

    assert.equal(subject.apiHost, 'http://fake');
    assert.equal(subject.apiKey, 'key');
    assert.equal(subject.secret, 'secret');
  });

  describe('GET', () => {
    let proxy = new ProxyServer(require('./tapes/fake'));

    before('Creating fake server', (done) => proxy.listen(done));
    after('Killing fake server', (done) => proxy.close(done));

    it('should be GET method', () => {
      return new Request(...DEFAULT_ARGS)
        .get('/fake', { 'q[id_eq]': 1 })
        .then(({ req }) => {
          assert.propertyVal(req, 'method', 'GET');
        });
    });

    it('should have path with QueryString', () => {
      return new Request(...DEFAULT_ARGS)
        .get('/fake', { 'q[id_eq]': 1 })
        .then(({ req }) => {
          assert.propertyVal(req, 'path', '/fake?q%5Bid_eq%5D=1');
        });
    });

    it('should setup Content-Type', () => {
      return new Request(...DEFAULT_ARGS)
        .get('/fake', { 'q[id_eq]': 1 })
        .then(({ req }) => {
          assert.deepPropertyVal(req, '_headers.content-type', 'application/json');
        });
    });

    it('should setup Accept', () => {
      return new Request(...DEFAULT_ARGS)
        .get('/fake', { 'q[id_eq]': 1 })
        .then(({ req }) => {
          assert.deepPropertyVal(req, '_headers.accept', 'application/vnd.regalii.v3.0+json');
        });
    });

    it('should setup Date', () => {
      return new Request(...DEFAULT_ARGS)
        .get('/fake', { 'q[id_eq]': 1 })
        .then(({ req }) => {
          assert.match(req['_headers']['date'], DATE_REGEX);
        });
    });

    it('should setup Content-MD5', () => {
      return new Request(...DEFAULT_ARGS)
        .get('/fake', { 'q[id_eq]': 1 })
        .then(({ req }) => {
          assert.deepPropertyVal(req, '_headers.content-md5', '');
        });
    });

    it('should setup Authorization', () => {
      return new Request(...DEFAULT_ARGS)
        .get('/fake', { 'q[id_eq]': 1 })
        .then(({ req }) => {
          assert.match(req['_headers']['authorization'], AUTH_REGEX);
        });
    });
  });

  describe('POST', () => {
    let proxy = new ProxyServer(require('./tapes/fake'));

    before('Creating fake server', (done) => proxy.listen(done));
    after('Killing fake server', (done) => proxy.close(done));

    it('should be POST method', () => {
      return new Request(...DEFAULT_ARGS)
        .post('/fake', { hello: 'world' })
        .then(({ req }) => {
          assert.propertyVal(req, 'method', 'POST');
        });
    });

    it('should have path without QueryString', () => {
      return new Request(...DEFAULT_ARGS)
        .post('/fake', { hello: 'world' })
        .then(({ req }) => {
          assert.propertyVal(req, 'path', '/fake');
        });
    });

    it('should setup Content-Type', () => {
      return new Request(...DEFAULT_ARGS)
        .post('/fake', { hello: 'world' })
        .then(({ req }) => {
          assert.deepPropertyVal(req, '_headers.content-type', 'application/json');
        });
    });

    it('should setup Accept', () => {
      return new Request(...DEFAULT_ARGS)
        .post('/fake', { hello: 'world' })
        .then(({ req }) => {
          assert.deepPropertyVal(req, '_headers.accept', 'application/vnd.regalii.v3.0+json');
        });
    });

    it('should setup Date', () => {
      return new Request(...DEFAULT_ARGS)
        .post('/fake', { hello: 'world' })
        .then(({ req }) => {
          assert.match(req['_headers']['date'], DATE_REGEX);
        });
    });

    it('should setup Content-MD5', () => {
      return new Request(...DEFAULT_ARGS)
        .post('/fake', { hello: 'world' })
        .then(({ req }) => {
          assert.deepPropertyVal(req, '_headers.content-md5', '+8JLzHoXlHWPwTJ/z+va9g==');
        });
    });

    it('should setup Authorization', () => {
      return new Request(...DEFAULT_ARGS)
        .post('/fake', { hello: 'world' })
        .then(({ req }) => {
          assert.match(req['_headers']['authorization'], AUTH_REGEX);
        });
    });

    it('should set the body');
  });

  describe('PATCH', () => {
    let proxy = new ProxyServer(require('./tapes/fake'));

    before('Creating fake server', (done) => proxy.listen(done));
    after('Killing fake server', (done) => proxy.close(done));

    it('should be PATCH method', () => {
      return new Request(...DEFAULT_ARGS)
        .patch('/fake', { hello: 'world' })
        .then(({ req }) => {
          assert.propertyVal(req, 'method', 'PATCH');
        });
    });

    it('should have path without QueryString', () => {
      return new Request(...DEFAULT_ARGS)
        .patch('/fake', { hello: 'world' })
        .then(({ req }) => {
          assert.propertyVal(req, 'path', '/fake');
        });
    });

    it('should setup Content-Type', () => {
      return new Request(...DEFAULT_ARGS)
        .patch('/fake', { hello: 'world' })
        .then(({ req }) => {
          assert.deepPropertyVal(req, '_headers.content-type', 'application/json');
        });
    });

    it('should setup Accept', () => {
      return new Request(...DEFAULT_ARGS)
        .patch('/fake', { hello: 'world' })
        .then(({ req }) => {
          assert.deepPropertyVal(req, '_headers.accept', 'application/vnd.regalii.v3.0+json');
        });
    });

    it('should setup Date', () => {
      return new Request(...DEFAULT_ARGS)
        .patch('/fake', { hello: 'world' })
        .then(({ req }) => {
          assert.match(req['_headers']['date'], DATE_REGEX);
        });
    });

    it('should setup Content-MD5', () => {
      return new Request(...DEFAULT_ARGS)
        .patch('/fake', { hello: 'world' })
        .then(({ req }) => {
          assert.deepPropertyVal(req, '_headers.content-md5', '+8JLzHoXlHWPwTJ/z+va9g==');
        });
    });

    it('should setup Authorization', () => {
      return new Request(...DEFAULT_ARGS)
        .patch('/fake', { hello: 'world' })
        .then(({ req }) => {
          assert.match(req['_headers']['authorization'], AUTH_REGEX);
        });
    });

    it('should set the body');
  });

  describe('Authentication Hash', () => {
    let proxy = new ProxyServer(require('./tapes/fake'));

    before('Creating fake server', (done) => proxy.listen(done));
    after('Killing fake server', (done) => proxy.close(done));

    it('should set a right AuthHash for GET request', () => {
      return new Request(...DEFAULT_ARGS)
        .get('/fake', { 'q[id_eq]': 1 })
        .then(({ req }) => {
          let sha1 = crypto.createHmac('sha1', DEFAULT_ARGS[2])
            .update(['application/json', '', '/fake', req['_headers']['date']].join(','))
            .digest('base64');

          assert.deepPropertyVal(req, '_headers.authorization', 'APIAuth ' + DEFAULT_ARGS[1] + ':' + sha1);
        });
    });

    it('should set a right AuthHash for POST request', () => {
      return new Request(...DEFAULT_ARGS)
        .post('/fake', { hello: 'world' })
        .then(({ req }) => {
          let sha1 = crypto.createHmac('sha1', DEFAULT_ARGS[2])
            .update(['application/json', '+8JLzHoXlHWPwTJ/z+va9g==', '/fake', req['_headers']['date']].join(','))
            .digest('base64');

          assert.deepPropertyVal(req, '_headers.authorization', 'APIAuth ' + DEFAULT_ARGS[1] + ':' + sha1);
        });
    });

    it('should set a right AuthHash for PATCH request', () => {
      return new Request(...DEFAULT_ARGS)
        .patch('/fake', { hello: 'world' })
        .then(({ req }) => {
          let sha1 = crypto.createHmac('sha1', DEFAULT_ARGS[2])
            .update(['application/json', '+8JLzHoXlHWPwTJ/z+va9g==', '/fake', req['_headers']['date']].join(','))
            .digest('base64');

          assert.deepPropertyVal(req, '_headers.authorization', 'APIAuth ' + DEFAULT_ARGS[1] + ':' + sha1);
        });
    });
  });
});
