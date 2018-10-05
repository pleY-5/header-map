const fs = require('fs');
const stringify = require('csv-stringify');


// ratings = {};
// ratings['2016'] = getRandomRatings();
// ratings['2017'] = getRandomRatings(ratings['2016'][ratings['2016'].length-1]);
// ratings['2018'] = getRandomRatings(ratings['2017'][ratings['2017'].length-1]);
// ratings['2018'][11] = null;
// ratings['2018'][12] = null;
// data.push(ratings['2016']);
// data.push(ratings['2017']);
// data.push(ratings['2018']);

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const genIndivMonth = (allPossibilities, counter, fileNum, mil) => {
    if (counter === 80) {
        return;
    }
    // if (counter === 0) {
    //     fs.appendFile(`./csvData/ratingInfo/rate${counter}Info${fileNum}_${counter}.csv`, 'year,month,stars,numRatings,restaurantId\n', (err) => {
    //         if (err) {
    //             console.log(err);
    //         }
    //     });
    // }
    for (let i = 1; i <= 12500; i++) {
        const years = ['2016','2017', '2018'];
        const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
        let yearCount = 0;
        let monthCount = 0;
        for (let j = 0; j < 36; j++) {
            const data = [];
            if (j % 12 === 0 && j !== 0) {
                yearCount += 1;
                monthCount = 0;
            }
            data.push(years[yearCount]);
            data.push(months[monthCount]);
            data.push(getRandomInt(1,5));
            data.push(getRandomInt(1,5));
            data.push(getRandomInt(1,5));
            data.push(getRandomInt(1,5));
            data.push(getRandomInt(1,5));
            data.push(i + counter*12500 + mil*1000000);
            allPossibilities.push(data);
            monthCount += 1;
        }
        yearCount = 0;
    }
    fs.appendFile(`./csvData/ratingInfo/rateInfo${fileNum}_${counter}.csv`, 'year,month,stars1,stars2,stars3,stars4,stars5,restaurantId\n', (err) => {
        if (err) {
            console.log(err);
        } else {
            stringify(allPossibilities, (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    fs.appendFile(`./csvData/ratingInfo/rateInfo${fileNum}_${counter}.csv`, data, (err) => {
                        if (err) {
                            console.log(err);
                        } else {
                            const nextFile = [];
                            genIndivMonth(nextFile, counter+=1, fileNum, mil);
                        }
                    });
                }
            });
        }
    });
}

const genRatings = (num = 0, arr=[], fileNum=1, mil=0) => {
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
            genIndivMonth(arr, counter, fileNum, mil);
            const numOfRes = 450000;
           if(arr.length === numOfRes) {
               resolve(arr);
           } else {
               reject(new Error(`did not make 400000, made:${arr.length}`))
           }
        });
        console.log(num);
        promisifyEntries.then((resolvedValue) => stringify(resolvedValue, (err, data) =>{
            if (err) {
                console.log(err);
            } else {
                const nextFile = [];
                genRatings(num+=1, nextFile, fileNum+=1, mil+=1);
            }
        }))
        
    }
}
genRatings();
