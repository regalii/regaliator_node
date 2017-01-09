'use strict';

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-Xss-Protection', '1; mode=block');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Etag', '"29503024667a3647d28134f8b3a74606"');
  res.setHeader('Cache-Control', 'max-age=0, private, must-revalidate');
  res.setHeader('X-Request-Id', 'ba2ba805-82d6-4e8c-80f7-409d4ecbf463');
  res.setHeader('X-Runtime', '0.032566');
  res.setHeader('Vary', 'Origin');
  res.setHeader('Date', 'Tue, 22 Mar 2016 19:46:14 GMT');
  res.setHeader('Connection', 'close');

  res.write(new Buffer(JSON.stringify({"MXN": 16.488, "RD": 43.7165})));
  res.end();

  return __filename;
};
