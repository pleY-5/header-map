const fs = require('fs');
const faker = require('faker');
const _ = require('underscore');
const stringify = require('csv-stringify');

const info = require('./info.js');

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

const generateMillionNames = (letter, allPossibilities, hundThous, counter, fileNum) => {
    if (counter === 10) {
        return;
    }
    if (counter === 0) {
        fs.appendFile(`./csvData/restaurantInfo/resInfo${fileNum}.csv`, 'name,dollars,address,city,state,postalCode,latitude,longitude,tel,url,claimed,yelpingSince\n', (err) => {
            if (err) {
                console.log(err);
            }
        });
    }
    for (let i = 0; i < 100000; i++) {
        const data = [];
        data.push('TuLan' + (i + 100000*hundThous)  + letter);
        // ratings = {};
        // ratings['2016'] = getRandomRatings();
        // ratings['2017'] = getRandomRatings(ratings['2016'][ratings['2016'].length-1]);
        // ratings['2018'] = getRandomRatings(ratings['2017'][ratings['2017'].length-1]);
        // ratings['2018'][11] = null;
        // ratings['2018'][12] = null;
        // data.push(ratings['2016']);
        // data.push(ratings['2017']);
        // data.push(ratings['2018']);
        // data.ratings = {
        //     yearly: {
        //       2016: getRandomRatings(),
        //     },
        //     current: 0,
        //     stars: {
        //         5: Math.floor(Math.random() * Math.floor(50)),
        //         4: Math.floor(Math.random() * Math.floor(40)),
        //         3: Math.floor(Math.random() * Math.floor(30)),
        //         2: Math.floor(Math.random() * Math.floor(30)),
        //         1: Math.floor(Math.random() * Math.floor(30)),
        //       },
        //       amount: 0,
        // };
         // adding ratings amount & current rating
        // data.ratings.amount = data.ratings.stars['5'] + data.ratings.stars['4'] + data.ratings.stars['3'] + data.ratings.stars['2'] + data.ratings.stars['1']; 
        // data.ratings.current = Math.floor(((data.ratings.stars['5']*5 + data.ratings.stars['4']*4 + data.ratings.stars['3']*3 + data.ratings.stars['2']*2 + data.ratings.stars['1'])/data.ratings.amount)*2);
        // //adding 2017 and 2018(- 9,10,11,12 months) monthly ratings
        // data.ratings.yearly['2017'] = getRandomRatings(data.ratings.yearly['2016'][data.ratings.yearly['2016'].length-1]);
        // data.ratings.yearly['2018'] = getRandomRatings(data.ratings.yearly['2017'][data.ratings.yearly['2017'].length-1]);
        // data.ratings.yearly['2018'][9] = null;
        // data.ratings.yearly['2018'][10] = null;
        // data.ratings.yearly['2018'][11] = null;
        // data.ratings.yearly['2018'][12] = null;
        //categories
        // data.push([randomCategoryFood(),randomCategoryFood()]);
        //dollars
        data.push(Math.floor(Math.random() * Math.floor(3)) + 1);
        //address
        data.push(randomAddress());
        data.push(randomCity());
        data.push(randomState());
        data.push(randomPostalCode());
        data.push(faker.address.latitude());
        data.push(faker.address.longitude());
        //other infos
        data.push(randomTel());
        data.push(randomUrl());
        data.push(Math.floor(Math.random() * Math.floor(2)));
        data.push(`${faker.date.between('2005-01-01', '2017-01-01')}`);
        // finalString = [`${'TuLan' + (i + 100000*hundThous) + letter},${Math.floor(Math.random() * Math.floor(3)) + 1},${randomAddress()},${randomCity()},${randomState()},${randomPostalCode()},${faker.address.latitude()},${faker.address.longitude()},${randomTel()},${randomUrl()},${Math.floor(Math.random() * Math.floor(2))},${faker.date.between('2005-01-01', '2017-01-01')}`];
        allPossibilities.push(data);
    }
    stringify(allPossibilities, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            fs.appendFile(`./csvData/restaurantInfo/resInfo${fileNum}.csv`, data, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    const nextFile = [];
                    generateMillionNames(letter, nextFile, hundThous+=1, counter+=1, fileNum);
                }
            });
        }
    });
};

var x;
var y;
const genTenMillionEntries = (num = 0, arr=[], fileNum=1) => {
    const letters = 'abcdefghij'.split('');
    if(num === 0) {
        x = Date.now();
    }
    if (num === 10) {
        y = Date.now();
        console.log(`${y-x}milliseconds`);
        return (`${y-x}seconds`);
    } else {
        const promisifyEntries = new Promise((resolve, reject) => {
            const hundThous = 0;
            const counter = 0;
            generateMillionNames(letters[num], arr, hundThous, counter, fileNum);
            const numOfRes = 100000;
           if(arr.length === 100000) {
               resolve(arr);
           } else {
               reject(new Error(`did not make 1 million, made:${arr.length}`))
           }
        });
        console.log(num);
        promisifyEntries.then((resolvedValue) => stringify(resolvedValue, (err, data) =>{
            if (err) {
                console.log(err);
            } else {
                // fs.writeFile(`./csvData/resInfo${fileNum}.csv`, data, (err) => {
                //     if (err) {
                //         console.log(err);
                //     } else {
                //         const nextFile = [];
                //         genTenMillionEntries(num+=1, nextFile, fileNum+=1);
                //     }
                // });
                const nextFile = [];
                genTenMillionEntries(num+=1, nextFile, fileNum+=1);
            }
        }))
        
    }
}
genTenMillionEntries();

//         finalString = [`${'TuLan' + (i + 100000*hundThous) + letter},${JSON.stringify(ratings['2016']).replace('[','{').replace(']','}')},${JSON.stringify(ratings['2017']).replace('[','{').replace(']','}')},${JSON.stringify(ratings['2018']).replace('[','{').replace(']','}')},{${randomCategoryFood()}, ${randomCategoryFood()}},${Math.floor(Math.random() * Math.floor(3)) + 1},${randomAddress()},${randomCity()},${randomState()},${randomPostalCode()},${faker.address.latitude()},${faker.address.longitude()},${randomTel()},${randomUrl()},${Math.floor(Math.random() * Math.floor(2))},${faker.date.between('2005-01-01', '2017-01-01')}`];


///////////////////////////

// var fs = require('fs');
// var faker = require('faker');

// fs.readFile('./sampleData/companyinfoj9.json', function (err, data) {
//     if (data) {
//         storage = JSON.parse(data);
//         console.log(storage);
//      }});





// const genTenMillionEntries = (num = 0, arr=[]) => {
//     const letters = 'abcdefghij'.split('');
//     if (num === 0) {
//         const initial = JSON.stringify(generateMillionNames(letters[num], arr));
//         fs.writeFile('companyInfo.JSON', initial, (err) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 genTenMillionEntries(num+=1, arr);
//             }
//         });
//     } else if (num === 10) {
//         console.log('done');
//         return;
//     }
//     else {
//         let add = JSON.stringify(generateMillionNames(letters[num], arr));
//         fs.appendFile('companyInfo.json', add, (err) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 genTenMillionEntries(num+=1, arr);
//             }
//         });
//     }
// }

// genTenMillionEntries();


// const promisifyEntries = new Promise((resolve, reject) => {
//     const initial = num ? genTenMillionEntries(num, arr) : genTenMillionEntries(num += 1, arr);
//     const numOfRes = 1000000
//    if(initial.length === numOfRes + numOfRes*num) {
//        resolve(initial);
//    } else {
//        reject(new Error('did not make 1 million'))
//    }
// });

// const getRandomRatings = (rate) => {
//     let output = [];
//     const jan = rate || rating2[Math.floor(Math.random() * Math.floor(7))];
//     const temp = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
//     output.push(jan);
//     const ratings = _.map(temp, () => {
//       return incDec[Math.floor(Math.random() * Math.floor(3))];
//     });
//     let rateStore = output[0];
//     output = output.concat(_.map(ratings, (rate) => {
//       rateStore = rateStore + rate;
//       if(rateStore > 10) {
//         rateStore = rateStore - (rateStore%10);
//       }
//       if(rateStore < 0) {
//         rateStore = 0;
//       }
//       return rateStore;
//     }));
//     return output;
//   };
  
//   let increment = 1;

// const generateMillionNames = (letter, allPossibilities, hundThous, counter, fileNum) => {
//     if (counter === 10) {
//         return;
//     }
//     for (let i = 0; i < 100000; i++) {
//         const current =[];
//         const data = {};
        // data.ratings = {
        //     yearly: {
        //       2016: getRandomRatings(),
        //     },
        //     current: 0,
        //     stars: {
        //         5: Math.floor(Math.random() * Math.floor(50)),
        //         4: Math.floor(Math.random() * Math.floor(40)),
        //         3: Math.floor(Math.random() * Math.floor(30)),
        //         2: Math.floor(Math.random() * Math.floor(30)),
        //         1: Math.floor(Math.random() * Math.floor(30)),
        //       },
        //       amount: 0,
        // };
         // adding ratings amount & current rating
        // data.ratings.amount = data.ratings.stars['5'] + data.ratings.stars['4'] + data.ratings.stars['3'] + data.ratings.stars['2'] + data.ratings.stars['1']; 
        // data.ratings.current = Math.floor(((data.ratings.stars['5']*5 + data.ratings.stars['4']*4 + data.ratings.stars['3']*3 + data.ratings.stars['2']*2 + data.ratings.stars['1'])/data.ratings.amount)*2);
        // //adding 2017 and 2018(- 9,10,11,12 months) monthly ratings
        // data.ratings.yearly['2017'] = getRandomRatings(data.ratings.yearly['2016'][data.ratings.yearly['2016'].length-1]);
        // data.ratings.yearly['2018'] = getRandomRatings(data.ratings.yearly['2017'][data.ratings.yearly['2017'].length-1]);
        // data.ratings.yearly['2018'][9] = null;
        // data.ratings.yearly['2018'][10] = null;
        // data.ratings.yearly['2018'][11] = null;
        // data.ratings.yearly['2018'][12] = null;
        //categories
//     }
//     stringify(allPossibilities, (err, data) => {
//         if (err) {
//             console.log(err);
//         } else {
//             fs.appendFile(`./restaurantInfo/csvData/resInfo${fileNum}.csv`, data, (err) => {
//                 if (err) {
//                     console.log(err);
//                 } else {
//                     const nextFile = [];
//                     generateMillionNames(letter, nextFile, hundThous+=1, counter+=1, fileNum);
//                 }
//             });
//         }
//     });
// };

// var x;
// var y;
// const genTenMillionEntries = (num = 0, arr=[], fileNum=1) => {
//     const letters = 'abcdefghij'.split('');
//     if(num === 0) {
//         x = Date.now();
//     }
//     if (num === 10) {
//         y = Date.now();
//         console.log(`${y-x}milliseconds`);
//         return (`${y-x}seconds`);
//     } else {
//         const promisifyEntries = new Promise((resolve, reject) => {
//             const hundThous = 0;
//             const counter = 0;
//             generateMillionNames(letters[num], arr, hundThous, counter, fileNum);
//             const numOfRes = 100000;
//            if(arr.length === numOfRes) {
//                resolve(arr);
//            } else {
//                reject(new Error(`did not make 1 million, made:${arr.length}`))
//            }
//         });
//         console.log(num);
//         promisifyEntries.then((resolvedValue) => stringify(resolvedValue, (err, data) =>{
//             if (err) {
//                 console.log(err);
//             } else {
//                 const nextFile = [];
//                 genTenMillionEntries(num+=1, nextFile, fileNum+=1);
//             }
//         }))
        
//     }
// }
// genTenMillionEntries();
