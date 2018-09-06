const mongoose = require('mongoose');
let Promise = require('bluebird')
mongoose.Promise = Promise;

mongoose.connect('mongodb://127.0.0.1:27017/yelpReactor', {useNewUrlParser: true });
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('db connected')
// });

let restaurantSchema = mongoose.Schema({
  name: String,
  ratings: {
    yearly: {
      '2016': Array,
      '2017': Array,
      '2018': Array
    }, 
    current: Number, 
    individualStarsAmount: {
    	1:Number,
    	2:Number,
    	3:Number,
    	4:Number,
    	5:Number
    },
    amount: Number
  },
  categories: Array,
  dollars: Number,
  address: String,
  mapPhoto: String,
  tel: String,
  url: String,
  claimed: Boolean,
  yelpingSince: String
});

let Restaurants = mongoose.model('Restaurants', restaurantSchema);

var tes = [{name: 'Cherr', b: 'E'}, {name:'winds', a:'6'}];
	var test = new Restaurants(tes[0]);
	test.save(()=>{
		Tests.find((data, d)=>{
			console.log(data, d)
		})
	})
