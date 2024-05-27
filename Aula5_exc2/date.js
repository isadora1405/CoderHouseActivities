const moment = require('moment');

let referenceDate = moment('1992-05-14');

let currentDate = moment()

let daysPassed = currentDate.diff(referenceDate, 'days');

console.log(currentDate)

console.log(`Passaram-se ${daysPassed} dias desde 14/05/1992.`);