const mongoose = require('mongoose');
const Promise = require('bluebird');

mongoose.Promise = Promise;

mongoose.connect('mongodb://127.0.0.1:27017/yelpReactor', {useNewUrlParser: true });

const restaurantSchema = mongoose.Schema({
  id: Number,
  lName: String,
  name: String,
  ratings: {
    yearly: {
      2016: Array,
      2017: Array,
      2018: Array,
    },
    current: Number,
    stars: {
      1: Number,
      2: Number,
      3: Number,
      4: Number,
      5: Number,
    },
    amount: Number,
  },
  categories: Array,
  dollars: Number,
  address: String,
  city: String,
  state: String,
  postalCode: String,
  latitude: String,
  longitude: String,
  tel: String,
  url: String,
  claimed: Boolean,
  yelpingSince: String,
});

const Restaurants = mongoose.model('Restaurants', restaurantSchema);

// Finding all data

const getRestaurantsById = (resId, callback) => {
  const id = parseInt(resId, 10);
  Restaurants.find({ id }, (err, d) => {
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

const delRestaurantsById = (resId, callback) => {
  const id = parseInt(resId, 10);
  Restaurants.deleteOne({ id }, (err, d) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, d);
    }
  });
};

const delRestaurantsByName = (resName, callback) => {
  Restaurants.deleteOne({ lName: resName }, (err, d) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, d);
    }
  });
};

const postRestaurantsById = (resId, callback) => {
  const id = parseInt(resId, 10);
  const restName = new Restaurants({ id });
  restName.save((err, d) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, d);
    }
  });
};

const postRestaurantsByName = (resName, callback) => {
  const restName = new Restaurants({ name: resName });
  restName.save((err, d) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, d);
    }
  });
};

const putRestaurantsById = (resId, callback) => {
  const id = parseInt(resId, 10);
  Restaurants.updateOne({ id }, { name: 'sup' }, (err, d) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, d);
    }
  });
};

const putRestaurantsByName = (resName, callback) => {
  Restaurants.updateOne({ lName: resName }, { name: 'sup' }, (err, d) => {
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
