'use strict';

module.exports = function(req, res) {
  res.statusCode = 200;

  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-Xss-Protection', '1; mode=block');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Etag', 'W/"1fae34a1a67550f79f43c740411397dc"');
  res.setHeader('Cache-Control', 'max-age=0, private, must-revalidate');
  res.setHeader('X-Request-Id', '29be0b82-604b-4096-b5f0-8bba834db266');
  res.setHeader('X-Runtime', '0.173437');
  res.setHeader('Transfer-Encoding', 'chunked');

  res.write(new Buffer(JSON.stringify({"id":674101,"biller_id":6503,"account_number":"12345","name_on_account":"Kelly Gruber","due_date":"2016-10-10","balance":10.5,"balance_currency":"USD","balance_updated_at":"2016-08-03T18:35:21Z","created_at":"2016-06-14T20:57:08Z","status":"updated","address":null,"payment_method":null,"statements":[],"subordinates":[]})));
  res.end();

  return __filename;
};
