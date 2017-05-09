'use strict';

const assert = require('chai').assert;
const proxyquire = require('proxyquire');
const config = require('../../config.json');
const Phish = require('../../');
const phish = new Phish(config.apiKey);
let req = require('../../lib/req')

describe('lib/req', () => {
  it('should return a function', () => {
    assert.equal(typeof req({}, '/phoo'), 'function');
  });

  describe('the returned function', () => {
    it('should handle the query arguments', () => {
      let req = proxyquire('../../lib/req', {
        request: (url, cb) => {
          assert.equal(
            url,
            `${phish.baseURL}/phoo?apikey=${phish.apiKey}&phoo=true`
          );
        }
      });

      req(phish, '/phoo')({
        phoo: true
      });
    });

    it('should handle no query arguments', () => {
      let req = proxyquire('../../lib/req', {
        request: (url, cb) => {
          assert.equal(
            url,
            `${phish.baseURL}/phoo?apikey=${phish.apiKey}`
          );
        }
      });

      req(phish, '/phoo')();
    })

    it('should return a promise when invoked', (done) => {
      let req = proxyquire('../../lib/req', {
        request: (url, cb) => cb(null, { statusCode: 200 })
      });

      req(phish, '/phoo')().then(done);
    });

    it('should resolve the promise passing the response body back', () => {
      let req = proxyquire('../../lib/req', {
        request: (url, cb) => cb(null, { statusCode: 200 }, 'Phred')
      });

      req(phish, '/phoo')().then((data) => {
        assert.equal(data, 'Phred');
      });
    });

    it('should handle errors', () => {
      const errMsg = 'Your trip is short';
      let req = proxyquire('../../lib/req', {
        request: (url, cb) => cb(errMsg)
      });

      req(phish, '/phoo')().catch((err) => {
        assert.equal(err, errMsg);
      });
    });

    it('should reject non-200 requests', (done) => {
      const errMsg = 'Your trip is short';
      let req = proxyquire('../../lib/req', {
        request: (url, cb) => cb(null, { responseCode: 555 })
      });

      req(phish, '/phoo')().catch(() => done());
    });
  });
});
