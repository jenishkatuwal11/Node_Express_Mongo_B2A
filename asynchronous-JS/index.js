const fs = require("fs");
const superagent = require("superagent");
const { reject } = require("superagent/lib/request-base");

const readFileProm = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject("File Not Found");
      resolve(data);
    });
  });
};

const writeFileProm = (file, data) => {
  return new Promise((reslove, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject("File could not load sorry !!!");
      resolve("Successfull !! ");
    });
  });
};

const getDogPic = async () => {
  try {
    const data = await readFileProm(`${__dirname}/dog.txt`);
    console.log(`Breed : ${data}`);
    const res = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    console.log(res.body.message);

    await readFileProm("dog-img.txt", res.body.message);
    console.log("Random dog image save along with new file");
  } catch (err) {
    console.log(err);
  }
};
getDogPic();

/*
readFileProm(`${__dirname}/dog.txt`).then(data =>{
    console.log(`Breed : ${data}`);


    return superagent
         .get(`https://dog.ceo/api/breed/${data}/images/random`)
})      
            .then(res =>{
             console.log(res.body.message);

            return readFileProm('dog-img.txt', res.body.message);

            // fs.writeFile('dog-img.txt', res.body.message, err =>{
            //      if(err) return console.log(err.message);
            //      console.log('Random dog image save along with new file');
            //  });
        
        })
        .then (() =>{
            console.log('Random dog image save to the file')
        }).catch(err => {
            console.log(err.message);
}); */

// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//     console.log(`Breed : ${data}`);

///////////// Call BackHell
// superagent
//     .get(`https://dog.ceo/api/breed/${data}/images/random`).then(res =>{})
//     .end((err,res) => {
//         if(err) return console.log(err.message);
//         console.log(res.body.message);

//         fs.writeFile('dog-img.txt', res.body.message, err =>{
//             if(err) return console.log(err.message);
//             console.log('Random dog image save along with new file');
//         });
//     });

///////// Promises

//      superagent
//          .get(`https://dog.ceo/api/breed/${data}/images/random`)
//          .then(res =>{
//              console.log(res.body.message);

//             fs.writeFile('dog-img.txt', res.body.message, err =>{
//                  if(err) return console.log(err.message);
//                  console.log('Random dog image save along with new file');
//              });

//         }).catch(err => {
//             console.log(err.message);
//         });

// });
