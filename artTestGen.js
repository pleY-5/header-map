const fs = require('fs');

async function genArtTest () {
  const writeStream = fs.createWriteStream(`./artTest.csv`);
  await new Promise(res => writeStream.write('id\n',res));

  for (let j = 9980000; j < 10000000; j++) {
    await new Promise(res => writeStream.write(`${j}\n`, res));
    
  }
  writeStream.end();
}

genArtTest().catch( err => {
  if (err) {
      console.log(err);
  }
});