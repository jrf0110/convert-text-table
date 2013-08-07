var assert = require('assert');
var fs = require('fs');
var sample1 = fs.readFileSync('./sample.txt').toString();
var convert = require('../');

describe('The one and only function', function(){

  it('should convert valid input', function(){
    assert.deepEqual(
      convert( sample1 )
    , [
        { wiringPi: 0, GPIO: 17, Phys: 11, Name: 'GPIO 0', Mode: 'IN', Value: 'Low' }
      ]
    );
  });

});