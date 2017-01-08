'use strict';

module.exports = function(req, res) {
  res.statusCode = 401;

  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-Xss-Protection', '1; mode=block');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('X-Request-Id', '08aedf09-deab-4c9b-ba18-ea100f209958');
  res.setHeader('X-Runtime', '0.049840');
  res.setHeader('Vary', 'Origin');
  res.setHeader('Date', 'Tue, 22 Mar 2016 19:36:08 GMT');
  res.setHeader('Connection', 'close');

  res.write(new Buffer(JSON.stringify({"message":"Unauthorized"})));
  res.end();

  return __filename;
};
