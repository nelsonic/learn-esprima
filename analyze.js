var fs = require('fs'),
    esprima = require('esprima');

function analyzeCode(code) {
    // 1
}

// 2
if (process.argv.length < 3) {
    console.log('Usage: analyze.js file.js');
    process.exit(1);
}

// 3
var filename = process.argv[2];
console.log('Reading ' + filename);
var code = fs.readFileSync(filename);

analyzeCode(code);
console.log('Done');