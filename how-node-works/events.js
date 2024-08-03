const EventEmitter = require('events');
const http = require('http'); 

const myEmitter = new EventEmitter();

myEmitter.on('newSale', ()=>{
    console.log('There was a new Sale !');
});

myEmitter.on('newSale', ()=>{
    console.log('Customer Name : Jenish');
});

myEmitter.on('newSale', (stock)=>{
    console.log(`There are now ${stock} items left in stock`);
});

myEmitter.emit('newSale', 10);


///////////////////////////////////////////
// Creating a web server

const server = http.createServer();

server.on('request', (req,res)=>{
    console.log('Request Recived');
    res.end('Another Request');
});

server.on('close', ()=>{
    console.log('Server is closed');
    
});

server.listen(8080, '127.0.0.1',()=>{
    console.log('Waiting for requests.....');
});