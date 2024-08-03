//console.log(arguments);
//console.log(require('module').wrapper);

// module.export how works
const C = require('./test-modules1'); // Importing modules;
const calculator = new C();
console.log(`Your Sum is ${calculator.add(10,10)}`);

// exports

const calculator2 = require('./test-modules2');
console.log(`Your Sum is ${calculator2.add(10,10)}`);

//caching 
require('./test-modules3')(); // Importing modules;

