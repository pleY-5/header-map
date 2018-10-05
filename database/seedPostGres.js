// const split2 = require('split2');
// const fs = require('mz/fs');
const { Client } = require('pg');

require('dotenv').config();

const client = new Client({
    user: process.env.DB_user,
    host: 'localhost',
    database: process.env.DB_DB,
    password: process.env.DB_PASS,
    port: 5432,
});

// client.connect((err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('connected');
//     }
// })
// const query = `COPY restaurant(name, dollars, address, city, state, postalCode, latitude, longitude, tel, url, claimed, yelpingSince) FROM 'C:/Users/Spencer/Desktop/Hack-Reactor Projects/header-map/database/csvData/restaurantInfo/resInfo${1}.csv' DELIMITER ',' CSV HEADER;`

// client.query(query, (err) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log('queried');
//     }
// })
async function main () {
    await client.connect();

    for (let i = 1; i <= 10; i++) {
        const query = `COPY restaurant(name, dollars, address, city, state, postalCode, latitude, longitude, tel, url, claimed, yelpingSince) FROM 'C:/Users/Spencer/Desktop/Hack-Reactor Projects/header-map/database/csvData/restaurantInfo/resInfo${i}.csv' DELIMITER ',' CSV HEADER;`
        const copy = await client.query(query);
        console.log(i);
    }
    console.log('done seeding resaurant info');

    for (let i = 1; i <= 10; i++) {
        const catQuery = `COPY category(category, restaurantId) FROM 'C:/Users/Spencer/Desktop/Hack-Reactor Projects/header-map/database/csvData/categoryInfo/catInfo${i}.csv' DELIMITER ',' CSV HEADER;`
        const catCopy = await client.query(catQuery);
        console.log(i);
    }
    console.log('done seeding category info');

    for (let i = 1; i <= 10; i++) {
        for (let j= 0; j < 80; j++) {
            const ratingQuery = `COPY rating(year, month, stars1, stars2, stars3, stars4, stars5, restaurantId) FROM 'C:/Users/Spencer/Desktop/Hack-Reactor Projects/header-map/database/csvData/ratingInfo/rateInfo${i}_${j}.csv' DELIMITER ',' CSV HEADER;`
            const ratingCopy = await client.query(ratingQuery);
        }
        console.log(i);
    }
    console.log('done seeding rating info');
    await client.end();
}

main().catch(err => {
    if(err) {
        console.log(err);
    }
})

// const resData = require('./restaurantJSON/restaurantdata.json');

// async function seedPG() {
//     fs.readFile(`./restaurantJSON/restaurantdata0a.json`, 'utf8', (err,data) => {
//         if (err) {
//             console.log(err);
//         } else {
//             const restaurant = JSON.parse(data.replace(/\\n/g, "\\n"));
//             console.log(data);
//         }
//     })
// }

// seedPG();

