'use strict';

const Request = require('./request');

function Regaliator(apiHost, apiKey, secret) {
  if (!(this instanceof Regaliator)) {
    return new Regaliator(apiHost, apiKey, secret);
  }

  this.request = new Request(apiHost, apiKey, secret);

  this.account = function () {
    return this.request.get('/account');
  };

  this.bills = function (params) {
    return this.request.get('/bills', params);
  };

  this.createCredentialsBill = function (billerId, login, password) {
    return this.request.post('/bills', {
      biller_id: billerId,
      login: login,
      password: password
    });
  };

  this.createAccountNumberBill = function (billerId, accountNumber) {
    return this.request.post('/bills', {
      biller_id: billerId,
      account_number: accountNumber
    });
  };

  this.updateBillMfas = function (billId, mfas) {
    return this.request.patch('/bills/' + billId, mfas);
  };

  this.showBill = function (billId) {
    return this.request.get('/bills/' + billId);
  };

  this.deleteBill = function (billId) {
    return this.request.delete('/bills/' + billId);
  };

  this.showBillXdata = function (billId) {
    return this.request.get('/bills/' + billId + '/xdata');
  };

  this.xpayBill = function (billId, content) {
    return this.request.post('/bills/' + billId + '/pay', content);
  };

  this.xchangeBill = function (billId, content) {
    return this.request.post('/bills/' + billId + '/xchange', content);
  };

  this.updateBill = function (billId, content) {
    return this.request.patch('/bills/' + billId, content);
  };

  this.bulkRefreshBills = function (billIds) {
    return this.request.post('/bills/bulk_refresh', {
      bill_ids: billIds
    });
  };

  this.billers = function (type, params) {
    return this.request.get('/billers/' + type, params);
  };

  this.rates = function () {
    return this.request.get('/rates');
  };

  this.transactions = function (params) {
    return this.request.get('/transactions', params);
  };
}

module.exports = Regaliator;
