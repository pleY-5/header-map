require('dotenv').config();

const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DB,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    max: 100,
});

pool.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('connected');
    }
})

const getRestaurantsById = (resId, callback) => {
    const id = parseInt(resId, 10);
    const getIdResQuery = `SELECT * FROM restaurant INNER JOIN category ON restaurant.id=category.restaurantid INNER JOIN rating ON restaurant.id=rating.restaurantid WHERE restaurant.id=${id};`;
    pool.query(getIdResQuery, (err, d) => {
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
    pool.query(getNameResQuery, (err, d) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, d);
      } 
    });
  };

  const postRestaurantsById = (resId, callback) => {
    const id = parseInt(resId, 10);
    const postIdResQuery = `INSERT INTO restaurant (id,name,dollars,address,city,state,postalCode,latitude,longitude,tel,url,claimed,yelpingSince) VALUES (${id},'TuLanOG',1,'Hack Reactor Place','San Francisco','California',94014,'-1','1','329-223-1333','www.google.com',0,'Tue Jan 06 2009 14:57:52 GMT-0800 (Pacific Standard Time)')`;
    pool.query(postIdResQuery, (err, d) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, d);
      } 
    });
  };
  
  const postRestaurantsByName = (resName, callback) => {
    const getNameResQuery = `INSERT INTO restaurant (name,dollars,address,city,state,postalCode,latitude,longitude,tel,url,claimed,yelpingSince) VALUES ('${resName}',1,'Hack Reactor Place','San Francisco','California',94014,'-1','1','329-223-1333','www.google.com',0,'Tue Jan 06 2009 14:57:52 GMT-0800 (Pacific Standard Time)')`;
    pool.query(getNameResQuery, (err, d) => {
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
    pool.query(delIdResQuery, (err, d) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, d);
      } 
    });
  };
  
  const delRestaurantsByName = (resName, callback) => {
    const delNameResQuery = `DELETE FROM restaurant WHERE name=${resName}`;
    pool.query(delNameResQuery, (err, d) => {
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
    pool.query(putIdResQuery, (err, d) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, d);
      } 
    });
  };
  
  const putRestaurantsByName = (resName, callback) => {
    const putNameResQuery = `UPDATE restaurant SET name='tulaan' WHERE name='${resName}'`;
    pool.query(putNameResQuery, (err, d) => {
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