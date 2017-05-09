'use strict';

const methods = require('./methods.json');
const req = require('../req');

module.exports = (phish) => {
  methods.forEach((method) => {
    phish[method.name] = req(phish, method.path);
  });
};
