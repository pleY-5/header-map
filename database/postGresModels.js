const { Client } = require('pg');

require('dotenv').config();

const client = new Client({
    user: process.env.DB_user,
    host: 'localhost',
    database: process.env.DB_DB,
    password: process.env.DB_PASS,
    port: 5432,
});


client.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('connected');
    }
})

const getRestaurantsById = (resId, callback) => {
    const id = parseInt(resId, 10);
    const getResQuery = ``;
    client.query({ id }, (err, d) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, d);
      }
    });
  };
  
  const getRestaurantsByName = (resName, callback) => {
    Restaurants.find({ lName: resName }, (err, d) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, d);
      }
    });
  };