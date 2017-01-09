'use strict';

const http = require('http');

module.exports = ProxyServer;

function ProxyServer(tape) {
  if (!(this instanceof ProxyServer)) {
    return new ProxyServer(tape);
  }

  this.proxy = http.createServer(tape);

  this.listen = function (done) {
    this.proxy.listen(4567, done);
  };

  this.close = function (done) {
    this.proxy.close(done);
  };
}
