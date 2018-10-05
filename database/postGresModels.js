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

  const postRestaurantsById = (resId, callback) => {
    const id = parseInt(resId, 10);
    const postIdResQuery = `INSERT INTO restaurant (id) VALUES (${id})`;
    client.query(postIdResQuery, (err, d) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, d);
      } 
    });
  };
  
  const postRestaurantsByName = (resName, callback) => {
    const getNameResQuery = `INSERT INTO restaurant (name) VALUES ('${resName}')`;
    client.query(getNameResQuery, (err, d) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, d);
      } 
    });
  };

  const delRestaurantsById = (resId, callback) => {
    const id = parseInt(resId, 10);
    const delIdResQuery = `DELETE FROM restaurant WHERE id=${id}`;
    client.query(delIdResQuery, (err, d) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, d);
      } 
    });
  };
  
  const delRestaurantsByName = (resName, callback) => {
    const delNameResQuery = `DELETE FROM restaurant WHERE name=${resName}`;
    client.query(delNameResQuery, (err, d) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, d);
      } 
    });
  };

  const putRestaurantsById = (resId, callback) => {
    const id = parseInt(resId, 10);
    const putIdResQuery =  `UPDATE restaurant SET id=9999999 WHERE id=${id}`;
    client.query(putIdResQuery, (err, d) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, d);
      } 
    });
  };
  
  const putRestaurantsByName = (resName, callback) => {
    const putNameResQuery = `UPDATE restaurant SET name='tulaan' WHERE name='${resName}'`;
    client.query(putNameResQuery, (err, d) => {
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
    delRestaurantsById,
    delRestaurantsByName,
    postRestaurantsById,
    postRestaurantsByName,
    putRestaurantsById,
    putRestaurantsByName,
  };