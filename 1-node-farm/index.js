const fs = require('fs');  // importing  file system (fs) module
const http = require('http'); // importing server
const { type } = require('os');
const url = require('url');   // 

/////////////////////// FIles Read Write ////////////////////////////////
//Blocking, Synchronous Way
// Reading present file
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');// this sync file system takes two arguments 1st path of file 2nd encoding 
// console.log(textIn);

//  writing new file
// const textOut = ` This is a fun fact about ${textIn}\n Created on ${Date.now()}`;
// fs.writeFileSync('./txt/newFile.txt', textOut);
// console.log('New File has been written')


//Non Blocking, Asynchronous Way
// fs.readFile('./txt/start.txt','utf-8', (err, data1) =>{
//     fs.readFile(`./txt/${data1}.txt`,'utf-8', (err, data2) =>{
//         console.log(data2);
//         fs.readFile('./txt/append.txt','utf-8', (err, data3) =>{
//             console.log(data3);

//             fs.writeFile('.txt/final.txt',`${data2}\n${data3}`, 'utf-8', err =>{
//                 console.log('Your File has been written');
//             })
//         });
//     });
// });

// console.log("Read me first");

//////////////////////////////////// Making Servers //////////////////////////////////
const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8')
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');

const data = fs.readFileSync(`${__dirname}/dev data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer ((req, res) =>{
    const pathName = (req.url);


    // Overview Page
    if(pathName === '/' || pathName === '/overview'){
        res.writeHead(200, {'content-type':'text/html'});
        res.end(tempOverview);
    }
    // Product page
    else if (pathName === '/products'){
        res.end('This is products');
    }
    // API
    else if(pathName ==='/api'){
            res.writeHead(200, {'content-type':'application/json'});
            res.end(data);
        
        
    }
    // Page Not Found
    else{
        res.writeHead(404,
        {
            'Content_Type' : 'text/html',
            'my-own-header': 'Hello-Jenish'
        });
        res.end('<h1>This Page is not found</h1>');
    }
     
});

server.listen(8080, '127.0.0.1', () => {
    console.log("Listening to the port");
});