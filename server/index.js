const _ = require('underscore');
const express = require('express');
let app = express();
const bodyParser = require('body-parser');
let getRestaurants = require('../database/index.js').getRestaurants;

app.use(express.static('./client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/res', function (req, res) {
	let resName = Object.values(req.query)[0];
	getRestaurants(resName, (err, data)=>{
		res.send(JSON.stringify(data[0]));
	});
});

let port = 7763;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
 