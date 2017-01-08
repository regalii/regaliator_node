'use strict';

module.exports = function(req, res) {
  res.statusCode = 200;

  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-Xss-Protection', '1; mode=block');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Etag', '"26f2a27ae80cf111448992a8984eb010"');
  res.setHeader('Cache-Control', 'max-age=0, private, must-revalidate');
  res.setHeader('X-Request-Id', '614893e7-9a5e-4917-b3f0-05f7ea5b1eb3');
  res.setHeader('X-Runtime', '0.027250');
  res.setHeader('Vary', 'Origin');
  res.setHeader('Date', 'Tue, 22 Mar 2016 19:56:13 GMT');
  res.setHeader('Connection', 'close');

  res.write(new Buffer(JSON.stringify({"billers":[{"id":3261,"name":"Adani Energy Limited","country":"IN","currency":"INR","biller_type":"Gas","bill_type":"account_number","can_check_balance":false,"mask":"9999999999","requires_name_on_account":false,"supports_partial_payments":true,"hours_to_fulfill":0,"account_number_digits":"10"}]})));
  res.end();

  return __filename;
};
