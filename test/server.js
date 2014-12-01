var supertest = require('supertest');
var mocha = require('mocha');
var chai = require('chai');
var assert = chai.assert;
    expect = chai.expect;


describe('TMDB helpers', function() {
  var tmdb = require('../server/helpers/tmdb');

  it('should get a request token', function(done) {
    tmdb.getNewAuthRequestToken()
    .then(function(data) {
      assert(JSON.parse(data).success);
      assert.ok(JSON.parse(data).request_token);
      done();
    });
  });
});
