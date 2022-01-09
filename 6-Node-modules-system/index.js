// Cara Mengeksekusi javascript menggunakan arrow function

// console.log('hello frans sebastian');
// const cetakNama = (nama) => `Hi, nama saya ${nama}`;
// console.log(cetakNama('Frans Sebastian'));
// const fs = require('fs'); //Core Module
// const cetakNama = require('./coba'); //Local Module
// const moment = require('moment'); //Third Party Module / npm module / node_modules

// const cetakNama = require('./coba');
// const Pi = require('./coba');

const coba = require('./coba');
console.log(coba);

console.log(
    coba.cetakNama('Frans Sebastian'),
    coba.PI,
    coba.mahasiswa.cetakMhs(),
    new coba.Orang()
);
