'use strict';

module.exports = function(req, res) {
  res.statusCode = 200;

  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-Xss-Protection', '1; mode=block');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Etag', '"4c9bb549ffd38f8e4e183f2554b71cce"');
  res.setHeader('Cache-Control', 'max-age=0, private, must-revalidate');
  res.setHeader('X-Request-Id', '96bc2458-60c4-40e4-9523-b423914f62fd');
  res.setHeader('X-Runtime', '0.173376');
  res.setHeader('Vary', 'Origin');
  res.setHeader('Date', 'Tue, 22 Mar 2016 19:56:13 GMT');
  res.setHeader('Connection', 'close');

  res.write(new Buffer(JSON.stringify({"billers":[{"id":6330,"name":"Adobe Creative Cloud","country":"US","currency":"","biller_type":"Media","bill_type":"credentials","required_parameters":null,"returned_parameters":null}]})));
  res.end();

  return __filename;
};
