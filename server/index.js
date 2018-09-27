const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const models = require('../database/index.js');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/:id', express.static('./client/dist'));

const corsOptions = {
  origin: 'http://localhost:1335',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

const { getRestaurantsByName, getRestaurantsById } = models;
const { delRestaurantsByName, delRestaurantsById } = models;
const { postRestaurantsByName, postRestaurantsById } = models;
const { putRestaurantsByName, putRestaurantsById } = models;

app.get('/:id/res', cors(corsOptions), (req, res) => {
  const resIdOrName = req.param('id');
  if (Number.isNaN(parseInt(resIdOrName, 10))) {
    getRestaurantsByName(resIdOrName, (err, data) => {
      res.send(JSON.stringify(data[0]));
    });
  } else {
    getRestaurantsById(resIdOrName, (err, data) => {
      res.send(JSON.stringify(data[0]));
    });
  }
});

app.get('/api/header/:id/res', cors(corsOptions), (req, res) => {
  const resIdOrName = req.param('id');
  if (Number.isNaN(parseInt(resIdOrName, 10))) {
    getRestaurantsByName(resIdOrName, (err, data) => {
      res.send(JSON.stringify(data[0]));
    });
  } else {
    getRestaurantsById(resIdOrName, (err, data) => {
      res.send(JSON.stringify(data[0]));
    });
  }
});

app.delete('/api/header/:id/res', (req, res) => {
  const resIdOrName = req.param('id');
  if (Number.isNaN(parseInt(resIdOrName, 10))) {
    delRestaurantsByName(resIdOrName, (err, data) => {
      res.send(JSON.stringify(data[0]));
    });
  } else {
    delRestaurantsById(resIdOrName, (err, data) => {
      res.send(JSON.stringify(data[0]));
    });
  }
});

app.post('/api/header/:id/res', (req, res) => {
  const resIdOrName = req.param('id');
  if (Number.isNaN(parseInt(resIdOrName, 10))) {
    postRestaurantsByName(resIdOrName, (err, data) => {
      res.send(JSON.stringify(data[0]));
    });
  } else {
    postRestaurantsById(resIdOrName, (err, data) => {
      res.send(JSON.stringify(data[0]));
    });
  }
});

app.put('/api/header/:id/res', (req, res) => {
  const resIdOrName = req.param('id');
  if (Number.isNaN(parseInt(resIdOrName, 10))) {
    putRestaurantsByName(resIdOrName, (err, data) => {
      res.send(JSON.stringify(data[0]));
    });
  } else {
    putRestaurantsById(resIdOrName, (err, data) => {
      res.send(JSON.stringify(data[0]));
    });
  }
});


const port = 7763;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
