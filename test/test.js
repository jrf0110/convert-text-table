var assert = require('assert');
var fs = require('fs');
var sample1 = fs.readFileSync( __dirname + '/sample.txt').toString();
var sampleout = require('./sample');
var convert = require('../');

describe('The one and only function', function(){

  it('should convert valid input', function(){
    assert.deepEqual(
      convert( sample1 )
    , sampleout
    );
  });

});