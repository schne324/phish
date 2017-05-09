'use strict';

const assert = require('chai').assert;
const config = require('../../../config.json');
const get = require('../../../lib/get/');
const methods = require('../../../lib/get/methods.json');
// const Phish = require('../../../');
// const phish = new Phish(config.apiKey);

describe('lib/get/', () => {
  describe('methods', () => {
    it('should be set', () => {
      const phoo = {};
      get(phoo);
      methods.forEach((method) => {
        assert.isDefined(phoo[method.name]);
      });
    });

    it('should be functions', () => {
      const phoo = {};
      get(phoo);
      methods.forEach((method) => {
        assert.equal('function', typeof phoo[method.name]);
      });
    });
  })
});
