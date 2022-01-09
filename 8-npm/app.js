const validator = require('validator');
const chalk = require('chalk');


// console.log(validator.isEmail('stefanusfranssebastiangmail.com'));
// console.log(validator.isMobilePhone('08017095294', 'id-ID'));
// console.log(validator.isNumeric('08017095294d'));

// console.log(chalk.italic.bgBlue('hello world'));
const pesan = chalk`Lorem ipsum dolor {bgBlue.italic.black.strikethrough sit amet} consectetur {bgGreen.italic.black.bold adipisicing elit}. Iste, voluptate.`;
console.log(pesan);