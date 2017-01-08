'use strict';

module.exports = function(req, res) {
  res.statusCode = 200;

  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-Xss-Protection', '1; mode=block');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Etag', '"95fdc4c2a9f1a86131f351a3ebe6bc7e"');
  res.setHeader('Cache-Control', 'max-age=0, private, must-revalidate');
  res.setHeader('X-Request-Id', '9ec4f589-7aee-4f52-80bc-de9687ff47f6');
  res.setHeader('X-Runtime', '0.019721');
  res.setHeader('Vary', 'Origin');
  res.setHeader('Date', 'Tue, 22 Mar 2016 19:36:08 GMT');
  res.setHeader('Connection', 'close');

  res.write(new Buffer(JSON.stringify({"name":"ABC Ltd","balance":20000.0,"minimum_balance":-2000.0,"currency":"USD"})));
  res.end();

  return __filename;
};
