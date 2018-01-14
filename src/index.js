
require('../node_modules/find-me'); // require.resolve('find-me') does not load module, default file is index.js

process.on('exit', (code) => {
    //
    console.log('about to exit with code: ${code}');
});
process.on('uncaughtException', (err)=> {
   //
   console.log(err);

   process.exit(1);
});
process.stdin.resume();

//console.log(module);
const data = require('data');
const config = require('./config.json');
const addon = require('../node_modules/addon');

//console.log(data);
//console.log(addon.hello());
//console.log(arguments);

const printStars = require('./printStart');
printStars(10, 'World');
var infile = __dirname + '/../test/data/lorem-ipsum.txt';
var outfile = __dirname + '/../test/lorem-ipsum-out.txt';
require('./another-rem')(infile, outfile);

