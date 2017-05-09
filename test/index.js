'use strict';

const assert = require('chai').assert;
const Phish = require('..');
const config = require('../config.json');
const phish = new Phish(config.apiKey);

describe('Phish', () => {
  it('should throw if no key is provided', () => {
    assert.throws(() => {
      new Phish();
    }, Error, 'missing API key');
  });

  it('should set `apiKey` property', () => {
    assert.isDefined(phish.apiKey);
  });

  it('should set the `baseURL` property', () => {
    assert.isDefined(phish.baseURL);
  });
});
