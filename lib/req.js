'use strict';

const request = require('request');
const queryString = require('query-string');

module.exports = (instance, path) => {
  return function (query) {
    query = query || {};
    query.apikey = instance.apiKey;

    const search = queryString.stringify(query);
    return new Promise((resolve, reject) => {
      request(`${instance.baseURL}${path}?${search}`, (err, res, body) => {
        if (err || res.statusCode !== 200) { return reject(err); }
        return resolve(body);
      });
    });
  }
};
