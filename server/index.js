const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const models = require('../database/index.js');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/:id', express.static('./client/dist'));

var corsOptions = {
  origin: 'http://localhost:1335',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.get('/:id/res', cors(corsOptions), function (req, res) {
  let resIdOrName = req.param('id');
  if (isNaN(parseInt(resIdOrName))) {
    getRestaurantsByName(resIdOrName, (err, data) => {
      res.send(JSON.stringify(data[0]));
    });
  } else {
    getRestaurantsById(resIdOrName, (err, data)=>{
      res.send(JSON.stringify(data[0]));
    });
  }
});

const { getRestaurantsByName, getRestaurantsById } = models;

app.get('/api/header/:id/res', cors(corsOptions), function (req, res) {
  let resIdOrName = req.param('id');
  if (isNaN(parseInt(resIdOrName))) {
    getRestaurantsByName(resIdOrName, (err, data) => {
      res.send(JSON.stringify(data[0]));
    });
  } else {
    getRestaurantsById(resIdOrName, (err, data)=>{
      res.send(JSON.stringify(data[0]));
    });
  }
});

app.post('/api/header/:id/res', (req, res) => {
  const resIdOrName = req.param('id');
  if (isNaN(parseInt(resIdOrName))) {
    getRestaurantsByName(resIdOrName, (err, data) => {
      res.send(JSON.stringify(data[0]));
    });
  } else {
    getRestaurantsById(resIdOrName, (err, data) => {
      res.send(JSON.stringify(data[0]));
    });
  }
});


let port = 7763;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});