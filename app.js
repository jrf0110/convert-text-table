var convert = require('./');
var fs = require('fs');
convert( fs.readFileSync('./test/sample.txt').toString() );
