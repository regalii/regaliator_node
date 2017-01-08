'use strict';

module.exports = function(req, res) {
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

  res.write(new Buffer(JSON.stringify({"bills":[{"id":440,"biller_id":9144,"account_number":"4222422249","name_on_account":null,"due_date":null,"balance":null,"balance_currency":"USD","balance_in_chain_currency":null,"balance_updated_at":null,"created_at":"2016-12-20T12:15:41Z","last_paid_at":null,"error_with_account":false,"error_message":null,"status":"pristine","migrated_at":null,"mfa_challenges":[]}]})));
  res.end();

  return __filename;
};
