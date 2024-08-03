const fs = require('fs');
const crypto = require('crypto');

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 1;


setTimeout(() =>{
    console.log('Finish this timer in 0')
}, 0);
setImmediate(() => console.log('Imediate 1 Finish'));

fs.readFile('test-file.txt', ()=>{
    console.log('I/O finish');

    setTimeout(() =>{console.log('Finish this timer 2')}, 0);
    setTimeout(() =>{console.log('Finish this timer 3 ')}, 3000);
    setImmediate(() => console.log('Immediate 2 Finish'));

    process.nextTick(() => console.log('process.NextTick'));

    crypto.pbkdf2('password', 'salt', 100000,1024, 'sha512', ()=>{
        console.log(Date.now()-start,'password encryption');
    });

});

console.log('Top Level Code');