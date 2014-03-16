
var assert = require("assert");
var Client = require("../lib/spectrum-client");

/*
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })
});
*/

describe('spectrum-client', function(){
  describe('setup', function(){
    it('should have default config', function(){
      var client = new Client();
      assert.equal(client.target, "http://127.0.0.1:5000");
      assert.equal(client.dest, "./features/spectrum/");
    });
    it('should override default config w/ arguments', function(){
      var client = new Client({
        target: "http://127.0.0.1",
        dest: "./test/resources/features/spectrum/"
      });
      assert.equal(client.target, "http://127.0.0.1");
      assert.equal(client.dest, "./test/resources/features/spectrum/");
    });
  });

  describe('execute', function(){
    it('run', function(){
      var client = new Client();

    });
  })
});
