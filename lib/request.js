'use strict';

const crypto = require('crypto-browserify');
const https = require('https-browserify');
const querystring = require('querystring-es3');
const url = require('url');

const CONTENT_TYPE = 'application/json';

module.exports = Request;

function Request(apiHost, apiKey, secret, version) {
  if (!(this instanceof Request)) {
    return new Request(apiHost, apiKey, secret, version);
  }

  this.accept = 'application/vnd.regalii.v' + (version || '3.0') + '+json';
  this.apiHost = apiHost;
  this.apiKey = apiKey;
  this.secret = secret;

  let that = this;

  this.get = function (endpoint, params) {
    const contentMd5 = '';
    const queryParams = parameterize(params);
    const headers = generateHeaders(endpoint, contentMd5);

    return request('GET', headers, that.apiHost + endpoint + queryParams);
  };

  this.post = function (endpoint, content) {
    const contentJson = json_encode(content);
    const contentMd5 = md5(contentJson);
    const headers = generateHeaders(endpoint, contentMd5);

    return request('POST', headers, that.apiHost + endpoint, contentJson);
  };

  this.patch = function (endpoint, content) {
    const contentJson = json_encode(content);
    const contentMd5 = md5(contentJson);
    const headers = generateHeaders(endpoint, contentMd5);

    return request('PATCH', headers, that.apiHost + endpoint, contentJson);
  };

  this.delete = function (endpoint, params) {
    const queryParams = parameterize(params);
    const headers = generateHeaders(endpoint, '');

    return request('DELETE', headers, that.apiHost + endpoint + queryParams);
  };

  function authHash(endpoint, contentMd5, date) {
    let data = [CONTENT_TYPE, contentMd5, endpoint, date].join(',');

    return sha1(data);
  }

  function generateHeaders(endpoint, contentMd5) {
    let date = now();
    let hash = authHash(endpoint, contentMd5, date);

    return {
      "Content-Type": CONTENT_TYPE,
      "Accept": that.accept,
      "Date": date,
      "Content-MD5": contentMd5,
      "User-Agent": "Regaliator Node package v" + version,
      "Authorization": "APIAuth " + that.apiKey + ":" + hash
    };
  }

  function json_encode(content) {
    return JSON.stringify(content);
  }

  function md5(content) {
    return crypto.createHash('md5').update(content).digest('base64');
  }

  function now() {
    return new Date().toUTCString();
  }

  function parameterize(params) {
    switch (typeof params) {
      case 'string':
        params = '?' + params;
        break;
      case 'object':
        params = '?' + querystring.stringify(params);
        break;
      default:
        params = '';
    }

    return params;
  }

  function request(method, headers, requestUrl, content) {
    return new Promise((resolve, reject) => {
      let options = url.parse(requestUrl);

      options.method = method;
      options.headers = headers;

      let req = https.request(options, (res) => {
        let body = '';

        res.setEncoding('utf8');
        res.on('data', (chunk) => body += chunk);
        res.on('end', () => resolve({ body: JSON.parse(body), req: res.req, res: res }));
      });

      req.on('error', reject);

      if (typeof content !== 'undefined') {
        req.write(content);
      }

      req.end();
    });
  }

  function sha1(content) {
    return crypto.createHmac('sha1', that.secret).update(content).digest('base64');
  }
}
