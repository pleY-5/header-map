var fs = require('fs');
var faker = require('faker');
// console.log(faker.address.latitude());
// fs.readFile('./companyinfo.json', function (err, data) {
//     if (err) throw err; // we'll not consider error handling for now
//     var obj = JSON.parse(data);
//     console.log(obj);
// });

fs.readFile('./sampleData/companyinfoj9.json', function (err, data) {
    if (data) {
        storage = JSON.parse(data);
        console.log(storage);
     }});

// $.getJSON("./companyinfo.JSON", function (data) {
//     $.each(data, function (index, value) {
//        console.log(value);
//     });
// });



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