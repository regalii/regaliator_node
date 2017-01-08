'use strict';

module.exports = function(req, res) {
  res.statusCode = 200;

  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-Xss-Protection', '1; mode=block');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Etag', '"1c08052831a51483e433474e1a0cdb1f"');
  res.setHeader('Cache-Control', 'max-age=0, private, must-revalidate');
  res.setHeader('X-Request-Id', '675769f9-19ca-483f-86a3-363c6d98ca10');
  res.setHeader('X-Runtime', '0.048035');
  res.setHeader('Vary', 'Origin');
  res.setHeader('Date', 'Tue, 22 Mar 2016 19:46:14 GMT');
  res.setHeader('Connection', 'close');

  res.write(new Buffer(JSON.stringify({"2016-03-22":{}})));
  res.end();

  return __filename;
};
