// Node Js bisa ngiri, function
function cetakNama(nama) {
    return `Halo nama saya ${nama}`;
}

// Node Js bisa ngirim variable
const PI = 3.14;


// Node Js bisa ngirim object
const mahasiswa = {
    nama: 'Stefanus Jiman',
    umur: 20,
    cetakMhs() {
        return `Halo nama saya adalah ${this.nama}, dan saya ${this.umur} tahun.`;
    },
};

// Node Js bisa ngirim class
class Orang {
    constructor() {
        console.log('Objek orang sudah di buat!!');
    }
}

//Cara Manual mengexports data 
    // module.exports.cetakNama = cetakNama;
    // module.exports.PI = PI;
    // module.exports.mahasiswa = mahasiswa;
    // module.exports.Orang = Orang;

// Cara Kedua memanggil data tidak memakai sintaks ES6
    // module.exports = {
    //     cetakNama: cetakNama,
    //     PI: PI,
    //     mahasiswa: mahasiswa,
    //     Orang: Orang,
    // };

// Cara Ketiga memanggil data memkai sintaks ES6
    module.exports = { cetakNama, PI, mahasiswa, Orang }; 