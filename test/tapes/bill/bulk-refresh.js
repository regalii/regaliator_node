'use strict';

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-Xss-Protection', '1; mode=block');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Etag', '"7d6d90aec27891b906d0ee6dfc9af4f3"');
  res.setHeader('Cache-Control', 'max-age=0, private, must-revalidate');
  res.setHeader('X-Request-Id', '7fbe6044-0ea6-4384-abc6-5c0db31566b1');
  res.setHeader('X-Runtime', '0.026813');
  res.setHeader('Vary', 'Origin');
  res.setHeader('Date', 'Wed, 23 Mar 2016 00:31:47 GMT');
  res.setHeader('Connection', 'close');

  res.write(new Buffer(JSON.stringify({
    "message": "Refresh in progress for 3 bills",
    "status": "200"
  })));
  res.end();

  return __filename;
};
