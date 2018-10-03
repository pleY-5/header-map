const fs = require('fs');
const info = require('./info.js');
const stringify = require('csv-stringify');


const { categories } = info;

const randomBound = (min, max) => Math.round(Math.random() * (max - min) + min);
const randomCategoryFood = () => categories.Food[randomBound(0, categories.Food.length-1)];
const randomCategoryRestaurant = () => categories.Restaurant[randomBound(0, categories.Restaurant.length-1)];

const genTwoMillionCat = (allPossibilities, counter, fileNum, twoMil) => {
    if (counter === 10) {
        return;
    }
    if (counter === 0) {
        fs.appendFile(`./csvData/categoryInfo/catInfo${fileNum}.csv`, 'category,restaurantId\n', (err) => {
            if (err) {
                console.log(err);
            }
        });
    }
    for (let i = 1; i <= 100000; i++) {
        const data = [];
        data.push(randomCategoryFood());
        data.push(i + counter*100000 + twoMil*1000000);
        const data2 = [];
        data2.push(randomCategoryRestaurant());
        data2.push(i + counter*100000 + twoMil*1000000);
        allPossibilities.push(data);
        allPossibilities.push(data2);
    }
    stringify(allPossibilities, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            fs.appendFile(`./csvData/categoryInfo/catInfo${fileNum}.csv`, data, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    const nextFile = [];
                    genTwoMillionCat(nextFile, counter+=1, fileNum, twoMil);
                }
            });
        }
    });
}

const genCategories = (num = 0, arr=[], fileNum=1, twoMil=0) => {
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
            genTwoMillionCat(arr, counter, fileNum, twoMil);
            const numOfRes = 200000;
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
                genCategories(num+=1, nextFile, fileNum+=1, twoMil+=1);
            }
        }))
        
    }
}
genCategories();
