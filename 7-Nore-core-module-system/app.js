// Core Module
const fs = require("fs");



// Menuliskan string ke file (Synchronous)
    // try {
    //     fs.writeFileSync('data/test.txt', 'Hello world secara syncronus!');
    // } catch(e) {
    //    console.log(e); 
    // }

// Menuliskan string ke file (Asynchrounous)
    // fs.writeFile('data/test.txt', 'Hello nama saya Frans Sebastian Salken', (e) => {
    //     console.log(e);
    // }); 

// Membaca isi file (synchronous)
    // const data = fs.readFileSync(`'data/contact.json' 'utf-8`);
    // console.log(data);

// Membaca Isi file (Asycronous)
    //    fs.readFile('data/test.txt', 'utf-8', (e, data) => {
    //         if(e) throw e;
    //         console.log(data);
    //    });  

// Readline
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

Membuat app contact sederhana dan mengubah nya menkadi json.
    rl.question('Masukan nama anda : ', (nama) => {
        rl.question('Masukan nomer handphone : ', (noHp) => {
            const contact  = { nama, noHp };
            const fileBuffer = fs.readFileSync('data/contact.json', 'utf8');
            const contacts = JSON.parse(fileBuffer);
            
            contacts.push(contact);
            fs.writeFileSync('data/contact.json', JSON.stringify(contacts));

            console.log('Terima kasih sudah memasukan data.')

            rl.close(); 
        });
    });

    // rl.question('Masukan nama anda : ', (nama) => {
    //     rl.question('Masukan nomer handphone : ', (noHP) => {
    //         const contact = { nama, noHp };
    //         const fileBuffer = fs.readFile('data/contact.json', 'utf8', (e, data) => {
    //             if(e) throw e;
                
    //         });

    //     });
    // });