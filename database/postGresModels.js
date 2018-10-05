require('dotenv').config();

const { Client } = require('pg');

const client = new Client({
    user: process.env.DB_USER,
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
    const getIdResQuery = `SELECT * FROM restaurant INNER JOIN category ON restaurant.id=category.restaurantid INNER JOIN rating ON restaurant.id=rating.restaurantid WHERE restaurant.id=${id};`;
    client.query(getIdResQuery, (err, d) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, d);
      } 
    });
  };
  
  const getRestaurantsByName = (resName, callback) => {
    const uppResName = `TuLan${resName.substring(5, resName.length)}`;
    const getNameResQuery = `SELECT * FROM restaurant INNER JOIN category ON restaurant.id=category.restaurantid INNER JOIN rating ON restaurant.id=rating.restaurantid WHERE restaurant.name='${uppResName}';`;
    client.query(getNameResQuery, (err, d) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, d);
      } 
    });
  };

  module.exports = {
    getRestaurantsByName,
    getRestaurantsById,
    // delRestaurantsById,
    // delRestaurantsByName,
    // postRestaurantsById,
    // postRestaurantsByName,
    // putRestaurantsById,
    // putRestaurantsByName,
  };