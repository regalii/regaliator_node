'use strict';

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-Xss-Protection', '1; mode=block');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Etag', '"0f285178775f3ad6995bb69c496ce3aa"');
  res.setHeader('Cache-Control', 'max-age=0, private, must-revalidate');
  res.setHeader('X-Request-Id', '2cd5d759-7b6c-4394-998a-c38a3646892f');
  res.setHeader('X-Runtime', '0.081188');
  res.setHeader('Vary', 'Origin');
  res.setHeader('Date', 'Tue, 22 Mar 2016 19:56:13 GMT');
  res.setHeader('Connection', 'close');

  res.write(new Buffer(JSON.stringify({
    "billers": [{
      "id": 4842,
      "name": "Alegro",
      "country": "EC",
      "currency": "USD",
      "biller_type": "Cell",
      "bill_type": "phone_number",
      "available_topup_amounts": ["6.00", "12.00"],
      "topup_fxrate": null,
      "mask": null,
      "topup_commission": 11.0,
      "account_number_digits": "8"
    }]
  })));
  res.end();

  return __filename;
};
