const bodyParser = require('body-parser');
// const cors = require('cors');
const express = require('express');
const models = require('../database/postGresModels.js');
require('newrelic');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/:id', express.static('./client/dist'));

const corsOptions = {
  origin: 'http://localhost:1335',
  optionsSuccessStatus: 200,
};

// app.use(cors(corsOptions));

const { getRestaurantsByName, getRestaurantsById } = models;
// const { delRestaurantsByName, delRestaurantsById } = models;
// const { postRestaurantsByName, postRestaurantsById } = models;
// const { putRestaurantsByName, putRestaurantsById } = models;

const calculateRatings = (dataBody) => {
  const ratings = {};

  const calculateStars = (dataBody) => {
    const stars = {};
    for (let i = 0; i < dataBody.length; i += 2) {
      stars[1] = stars[1] + dataBody[i].stars1 || 0;
      stars[2] = stars[2] + dataBody[i].stars2 || 0;
      stars[3] = stars[3] + dataBody[i].stars3 || 0;
      stars[4] = stars[4] + dataBody[i].stars4 || 0;
      stars[5] = stars[5] + dataBody[i].stars5 || 0;
    }
    return stars;
  };

  const addNullMonths = (arr) => {
    if(arr.length === 12) {
      return;
    }
    arr.push(null);
    addNullMonths(arr);
  }

  const monthlyAverage = (dataBody) => {
    const yearly = {};
    for (let i = 0; i < dataBody.length; i += 2) {
      const average = 2*Math.floor((dataBody[i].stars1 * 1 + dataBody[i].stars2 * 2 + dataBody[i].stars3 * 3 + dataBody[i].stars4 * 4 + dataBody[i].stars5 * 5)/(dataBody[i].stars1 + dataBody[i].stars2 + dataBody[i].stars3 + dataBody[i].stars4 + dataBody[i].stars5));
      if (yearly[dataBody[i].year]) {
        yearly[dataBody[i].year].push(average)
      } else {
        yearly[dataBody[i].year] = [average];
      }
    }
    const keys = Object.keys(yearly);
    for (let j = 0; j < keys.length; j++) {
      if (yearly[keys[j]].length !== 12 ) {
        addNullMonths(yearly[keys[j]]);
      }
    }
    return yearly;
  }

  ratings.stars = calculateStars(dataBody);
  ratings.amount = Object.keys(ratings.stars).reduce((accumulator, currentValue) => accumulator + ratings.stars[currentValue], 0);
  ratings.current = Math.floor(((ratings.stars['1']*1) + (ratings.stars['2']*2) + (ratings.stars['3']*3) + (ratings.stars['4']*4) + (ratings.stars['5']*5))/ratings.amount*2); 
  ratings.yearly = monthlyAverage(dataBody);
  return ratings;
};

const formatData = (data) => {
  const formattedData = {};
  const dataBody = data;
  formattedData.address = dataBody[0].address;
  formattedData.categories = [{ type: dataBody[0].category, specific: dataBody[1].category }];
  formattedData.city = dataBody[0].city;
  formattedData.claimed = !!dataBody[0].claimed;
  formattedData.dollars = dataBody[0].dollars;
  formattedData.id = dataBody[0].id;
  formattedData.latitude = dataBody[0].latitude;
  formattedData.longitude = dataBody[0].longitude;
  formattedData.name = dataBody[0].name;
  formattedData.postalCode = dataBody[0].postalcode;
  formattedData.ratings = calculateRatings(dataBody);
  formattedData.state = dataBody[0].state;
  formattedData.tel = dataBody[0].tel;
  formattedData.url = dataBody[0].url;
  formattedData.yelpingSince = dataBody[0].yelpingsince;
  return formattedData;
}

app.get('/:id/res', (req, res) => {  
  const resIdOrName = req.param('id');
  if (Number.isNaN(parseInt(resIdOrName, 10))) {
    getRestaurantsByName(resIdOrName, (err, data) => {
      res.send(JSON.stringify(formatData(data.rows)));
    });
  } else {
    getRestaurantsById(resIdOrName, (err, data) => {
      res.send(JSON.stringify(formatData(data.rows)));
    });
  }
});

app.get('/api/header/:id/res', (req, res) => {  
  const resIdOrName = req.param('id');
  if (Number.isNaN(parseInt(resIdOrName, 10))) {
    getRestaurantsByName(resIdOrName, (err, data) => {
      // res.send(JSON.stringify(formatData(data.fields)));
      res.send(JSON.stringify(formatData(data.rows)));
    });
  } else {
    getRestaurantsById(resIdOrName, (err, data) => {
      res.send(JSON.stringify(formatData(data.rows)));
    });
  }
});

// app.get('/api/header/:id/res', cors(corsOptions), (req, res) => {
//   const resIdOrName = req.param('id');
//   if (Number.isNaN(parseInt(resIdOrName, 10))) {
//     getRestaurantsByName(resIdOrName, (err, data) => {
//       res.send(JSON.stringify(data[0]));
//     });
//   } else {
//     getRestaurantsById(resIdOrName, (err, data) => {
//       res.send(JSON.stringify(data[0]));
//     });
//   }
// });

// app.delete('/api/header/:id/res', (req, res) => {
//   const resIdOrName = req.param('id');
//   if (Number.isNaN(parseInt(resIdOrName, 10))) {
//     delRestaurantsByName(resIdOrName, (err, data) => {
//       res.send(JSON.stringify(data[0]));
//     });
//   } else {
//     delRestaurantsById(resIdOrName, (err, data) => {
//       res.send(JSON.stringify(data[0]));
//     });
//   }
// });

// app.post('/api/header/:id/res', (req, res) => {
//   const resIdOrName = req.param('id');
//   if (Number.isNaN(parseInt(resIdOrName, 10))) {
//     postRestaurantsByName(resIdOrName, (err, data) => {
//       res.send(JSON.stringify(data[0]));
//     });
//   } else {
//     postRestaurantsById(resIdOrName, (err, data) => {
//       res.send(JSON.stringify(data[0]));
//     });
//   }
// });

// app.put('/api/header/:id/res', (req, res) => {
//   const resIdOrName = req.param('id');
//   if (Number.isNaN(parseInt(resIdOrName, 10))) {
//     putRestaurantsByName(resIdOrName, (err, data) => {
//       res.send(JSON.stringify(data[0]));
//     });
//   } else {
//     putRestaurantsById(resIdOrName, (err, data) => {
//       res.send(JSON.stringify(data[0]));
//     });
//   }
// });


const port = 7763;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
