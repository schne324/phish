'use strict';

const request = require('request');
const get = require('./lib/get/');

/**
 * A promise-based wrapper around the phish.net API
 *
 * ```js
 *   const Phish = require('phish');
 *   const phish = new Phish(API_KEY);
 *   phish
 *      .getAllVenues()
 *      .then((data) => {
 *          // do stuff and things
 *      });
 * ```
 */

module.exports = class {
  /**
   * Sets initial properties and calls `get` to setup the GET methods
   */
  constructor(key) {
    if (!key) { throw new Error('missing API key'); }
    this.apiKey = key;
    this.baseURL = 'https://api.phish.net/v3';

    // initialize get methods
    get(this);
  }
};
