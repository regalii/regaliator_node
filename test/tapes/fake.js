'use strict';

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("Content-Type", "application/json; charset=utf-8");

  res.write(new Buffer(JSON.stringify('Hello World!')));
  res.end();

  return __filename;
};
