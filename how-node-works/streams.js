const fs = require('fs');
const server = require('http').createServer();
// Solution 1 file is best for locally use -- if file is big for production it will crash out
server.on('request', (req, res) => {
    // fs.readFile('test-file.txt', (err, data) => {
    //     if (err) {
    //         console.log(err);
    //     }
    //     res.end(data);
    // });

    // // Solution 2 Using Stream:
    // const readable = fs.createReadStream('test-file.txt');
    // readable.on('data', chunk => {
    //     res.write(chunk);
    // });
    // readable.on('end', () => {
    //     res.end()
    // });
    // readable.on('error', err =>{
    //     console.log(err);
    //     res.statusCode = 500;
    //     res.end('File not found');
    // });

    // Solution 3 pipe operator
    const readable = fs.createReadStream('test-file.txt');
    readable.pipe(res);
    // readableSource.pipe(Writable Destination)
    // hello world i am fucking worst to see what i am seeing this things zehahaha derishishishi

});

server.listen(8080, '127.0.0.1', () => {
    console.log('Listening to port 8080....');
});