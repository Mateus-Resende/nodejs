var fs = require('fs');

var contents = fs.readFileSync('file.text', 'utf8');

console.log(contents);