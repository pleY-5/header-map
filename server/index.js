const _ = require('underscore');
const express = require('express');
let app = express();
const bodyParser = require('body-parser');
let getRestaurantsById = require('../database/index.js').getRestaurantsById;
let getRestaurantsByName = require('../database/index.js').getRestaurantsByName;
app.use(express.static('./client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/:id', express.static('./client/dist'));

app.get('/:id/res', function (req, res) {
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

let port = 7763;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});