'use strict';

module.exports = function(req, res) {
  res.statusCode = 201;

  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-Xss-Protection', '1; mode=block');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Etag', '"23ca92e46ced650653468a75c275d4be"');
  res.setHeader('Cache-Control', 'max-age=0, private, must-revalidate');
  res.setHeader('X-Request-Id', '0ceec74f-d2d1-4881-b794-bf486011f5c4');
  res.setHeader('X-Runtime', '0.148770');
  res.setHeader('Vary', 'Origin');
  res.setHeader('Date', 'Tue, 22 Mar 2016 21:42:58 GMT');
  res.setHeader('Connection', 'close');

  res.write(new Buffer(JSON.stringify({"id":23,"external_id":null,"biller_id":2,"account_number":"8081969","bill_amount":758.0,"bill_amount_currency":"RD","fx_rate":43.7165,"bill_amount_usd":17.34,"bill_amount_chain_currency":17.34,"payment_transaction_fee":3.0,"payment_total_usd":20.34,"payment_total_chain_currency":20.34,"chain_earned":0.0,"chain_paid":20.34,"starting_balance":-101.2,"ending_balance":-121.54,"hours_to_fulfill":0,"discount":0.0,"sms_text":null,"created_at":"2016-03-22T21:42:57Z","payment_status":"sent","bill_amount_local_currency":758.0,"local_currency":"RD"})));
  res.end();

  return __filename;
};
