const fs = require('fs');

async function genArtTest () {
  const writeStream = fs.createWriteStream(`./ratingCopyCMD.csv`);
  // await new Promise(res => writeStream.write('id\n',res));

  for (let i = 1; i <= 10; i+= 1) {
    for(let j = 0; j <= 79; j += 1) {
      await new Promise(res => writeStream.write(`\\COPY RATING(year, month, stars1, stars2, stars3, stars4, stars5, restaurantId) FROM 'C:/Users/Spencer/Desktop/Hack-Reactor Projects/header-map/database/csvData/ratingInfo/rateInfo${i}_${j}.csv' DELIMITER ',' CSV HEADER;\n`, res));
    }
  }
  writeStream.end();
}

genArtTest().catch( err => {
  if (err) {
      console.log(err);
  }
});