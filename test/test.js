let assert = require('assert');
let ConfigModule = require('../index');

describe('ConfigModule', function() {
  describe('#load({something:"a value"})).something', function() {
    it('.something should return "a value"', function() {
      assert.equal("a value", ConfigModule.load({something:"a value"}).something);
    });
  });
});
