const fs = require('fs');
const faker = require('faker');
const _ = require('underscore');

const info = require('./info.js');

let categories = {
  'Food': [
    'Afghan',
    'African',
    'South African',
    'American',
    'Arabian',
    'Argentine',
    'Armenian',
    'Asian Fusion',
    'Australian',
    'Austrian',
    'Bangladeshi',
    'Barbeque',
    'Basque',
    'Belgian',
    'Brasseries',
    'Brazilian',
    'British',
    'Buffets',
    'Burgers',
    'Burmese',
    'Cafes',
    'Themed Cafes',
    'Cafeteria',
    'Cajun Creole',
    'Caribbean',
    'Dominican',
    'Haitian',
    'Puerto Rican',
    'Trinidadian',
    'Catalan',
    'Cheesesteaks',
    'Chicken Wings',
    'Chinese',
    'Cantonese',
    'Szechuan',
    'Comfort Food',
    'Creperies',
    'Cuban',
    'Czech',
    'Delis',
    'Diners',
    'Fondue',
    'French',
    'Mauritius',
    'Reunion',
    'Game Meat',
    'Gastropubs',
    'German',
    'GlutenFree',
    'Greek',
    'Guamanian',
    'Halal',
    'Hawaiian',
    'Himalayan',
    'Hot Pot',
    'Hungarian',
    'Indian',
    'Indonesian',
    'Irish',
    'Italian',
    'Sardinian',
    'Sicilian',
    'Japanese',
    'Izakaya',
    'Japanese Curry',
    'Ramen',
    'Teppanyaki',
    'Kebab',
    'Korean',
    'Malaysian',
    'Mediterranean',
    'Falafel',
    'Mexican',
    'Tacos',
    'MiddleEastern',
    'Egyptian',
    'Lebanese',
    'ModernEuropean',
    'Mongolian',
    'Moroccan',
    'Nicaraguan',
    'Noodles',
    'Pizza',
    'Polish',
    'Polynesian',
    'Portuguese',
    'Poutineries',
    'Russian',
    'Salad',
    'Sandwiches',
    'Scandinavian',
    'Scottish',
    'Seafood',
    'Singaporean',
    'Soup',
    'Southern',
    'Spanish',
    'Steakhouses',
    'Thai',
    'Turkish',
    'Ukrainian',
    'Uzbek',
    'Vegan',
    'Vegetarian',
    'Vietnamese',
    'Waffles',
    'Wraps'
  ],
  'Restaurant': [
    'Acai Bowls',
    'Bagels',
    'Bakeries',
    'Beer, Wine & Spirits',
    'Beverage Store',
    'Breweries',
    'Brewpubs',
    'Bubble Tea',
    'Butcher',
    'CSA',
    'Chimney Cakes',
    'Cideries',
    'Coffee & Tea',
    'Coffee Roasteries',
    'Convenience Stores',
    'Cupcakes',
    'Custom Cakes',
    'Desserts',
    'Distilleries',
    'Do-It-Yourself Food',
    'Donuts',
    'Empanadas',
    'Farmers Market',
    'Food Delivery Services',
    'Food Trucks',
    'Gelato',
    'Grocery',
    'Honey',
    'Ice Cream & Frozen Yogurt',
    'Imported Food',
    'International Grocery',
    'Internet Cafes',
    'Juice Bars & Smoothies',
    'Kombucha',
    'Organic Stores',
    'Patisserie/Cake Shop',
    'Piadina',
    'Poke',
    'Pretzels',
    'Shaved Ice',
    'Shaved Snow',
    'Smokehouse',
    'Candy Stores',
    'Cheese Shops',
    'Chocolatiers & Shops',
    'Fruits & Veggies',
    'Health Markets',
    'Herbs & Spices',
    'Macarons',
    'Meat Shops',
    'Olive Oil',
    'Pasta Shops',
    'Popcorn Shops',
    'Seafood Markets',
    'Street Vendors',
    'Tea Rooms',
    'Water Stores',
    'Wineries'
  ]
};

const rating2 = [3, 4, 5, 6, 7, 8, 9];
const incDec = [-1, 0, 1];

const { address, city, state, postalCode, tel, url} = info;
const randomBound = (min, max) => Math.round(Math.random() * (max - min) + min);
const randomAddress = () => address[randomBound(0, address.length-1)];
const randomCity = () => city[randomBound(0, city.length-1)];
const randomState = () => state[randomBound(0, state.length-1)];
const randomPostalCode = () => postalCode[randomBound(0, postalCode.length-1)];
const randomTel = () => tel[randomBound(0, tel.length-1)];
const randomUrl = () => url[randomBound(0, url.length-1)];

const getRandomRatings = (rate) => {
    let output = [];
    const jan = rate || rating2[Math.floor(Math.random() * Math.floor(7))];
    const temp = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
    output.push(jan);
    const ratings = _.map(temp, () => {
      return incDec[Math.floor(Math.random() * Math.floor(3))];
    });
    let rateStore = output[0];
    output = output.concat(_.map(ratings, (rate) => {
      rateStore = rateStore + rate;
      if(rateStore > 10) {
        rateStore = rateStore - (rateStore%10);
      }
      if(rateStore < 0) {
        rateStore = 0;
      }
      return rateStore;
    }));
    return output;
};
  
let increment = 1;

const genRestaurant = (increment, letter) => {
    const letters = 'aabbccddeeffgghhiijj'.split('');
    let data = {};
    let number = increment;

    // if (increment >= 1000000) {
    //     const multiple = Math.floor(increment / 1000000);
    //     number = increment - (multiple * 1000000);
    //     letter = letters[multiple];
    // }
    data.name = 'TuLan' + number + letter;
    //ratings
    data.ratings = {
        yearly: {
        '2016': getRandomRatings()
        },
        current: 0,
        stars: {
        '5': Math.floor(Math.random() * Math.floor(50)),
        '4': Math.floor(Math.random() * Math.floor(40)),
        '3': Math.floor(Math.random() * Math.floor(30)),
        '2': Math.floor(Math.random() * Math.floor(30)),
        '1': Math.floor(Math.random() * Math.floor(30))
        },
        amount: 0
    }
    //adding ratings amount & current rating
    data.ratings.amount = data.ratings.stars['5'] + data.ratings.stars['4'] + data.ratings.stars['3'] + data.ratings.stars['2'] + data.ratings.stars['1']; 
    data.ratings.current = Math.floor(((data.ratings.stars['5']*5 + data.ratings.stars['4']*4 + data.ratings.stars['3']*3 + data.ratings.stars['2']*2 + data.ratings.stars['1'])/data.ratings.amount)*2);
    //adding 2017 and 2018(- 9,10,11,12 months) monthly ratings
    data.ratings.yearly['2017'] = getRandomRatings(data.ratings.yearly['2016'][data.ratings.yearly['2016'].length-1]);
    data.ratings.yearly['2018'] = getRandomRatings(data.ratings.yearly['2017'][data.ratings.yearly['2017'].length-1]);
    data.ratings.yearly['2018'][9] = null;
    data.ratings.yearly['2018'][10] = null;
    data.ratings.yearly['2018'][11] = null;
    data.ratings.yearly['2018'][12] = null;
    //categories
    data.categories = [];
    let categoriesNum = Math.floor(Math.random() * Math.floor(3))+1;
    for (let i = 0; i < categoriesNum; i++) {
        let cate = {};
        cate.type = Object.keys(categories)[Math.floor(Math.random() * Math.floor(2))];
        cate.specific = categories[cate.type][Math.floor(Math.random() * Math.floor(categories[cate.type].length))];
        data.categories.push(cate);
    }
    //dollars
    data.dollars = Math.floor(Math.random() * Math.floor(3)) + 1;
    //address
    data.address = randomAddress();
    data.city = randomCity();
    data.state = randomState();
    data.postalCode = randomPostalCode();
    data.latitude = faker.address.latitude();
    data.longitude = faker.address.longitude();
    //other infos
    data.tel = randomTel();
    data.url = randomUrl();
    data.claimed = !!Math.floor(Math.random() * Math.floor(2));
    data.yelpingSince = faker.date.between('2005-01-01', '2017-01-01');
    return data;
}

let x;
let y;

async function genResJSON () {
    x = Date.now();
    const letters = 'abcdefghij'.split('');
    let hundThous = 0;
    for (let i = 0; i < 100; i++){
        let letter = letters[Math.floor(i/10)];
        let writeStream = fs.createWriteStream(`./restaurantJSON/restaurantdata${i}${letter}.json`);
        if(i % 10 === 0) {
            hundThous = 0;
        }
        console.log(i);
        for (let j = 0; j < 100000; j++) {
            let number = j + hundThous*100000;
            const restaurant = genRestaurant(number,letter);
            const write = new Promise(res => writeStream.write)
            await new Promise(res => writeStream.write(JSON.stringify(restaurant)+ '\n', res));
            // await writeStream.write(JSON.stringify(restaurant) + '\n');
            
        }
        hundThous += 1;
        writeStream.on('end', function() {
            writeStream.end();
        });
    }
        y = Date.now();
    console.log(`${y-x}milliseconds`);
}

genResJSON().catch( err => {
    if (err) {
        console.log(err);
    }
});