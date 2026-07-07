const fetch = require('node-fetch');
const fs = require('fs');

//setTimout

// setTimeout(() => {
//     console.log("Waited 1 second");
// }, 1000);

// setTimeout(() => {

//     console.log('3');
//     setTimeout(() => {
//         console.log('2');

//         setTimeout(() => {
//             console.log('1');
//         }, 1000);

//     }, 1000);

// }, 1000);

// setTimeout(() => {


//     setTimeout(() => {

//         setTimeout(() => {
//             console.log('1');
//         }, 1000);

//         console.log('2');
//     }, 1000);

//     console.log('3');
// }, 1000);


// const btn;
// btn.addEventListener('click', () => {

// });

// error first callback

// fs.readFile('./test.txt', { encoding: 'utf-8' }, (err, data) => {

//     //console.log(data);
//     if (err) {
//         console.error('ERROR');
//         console.error(err);
//     } else {
//         console.error('==============GOT DATA======================');
//         console.log(data);
//         console.error(`==============End File======================`);
//     }

// });

// create a promise 

// const myPromise = new Promise((resolve, reject) => {

//     const rand = Math.floor(Math.random() * 2);
//     if (rand === 0) {
//         resolve();
//     } else {
//         reject();
//     }

// });

// myPromise.then(() => console.log('Success')).catch(() => console.error("Something went wrong"));

// fs.promises.readFile('./test.txt', { encoding: 'utf-8' }).then(data => console.log(data)).catch(err => console.error(err));

// //fetch api

// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//     .then((res) => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.error(err));


// const loadFile = async () => {
//     const data = await fs.promises.readFile('./test.txt', {
//         encoding: 'utf-8',
//     });
//     console.log(data);
// }

// loadFile();

const fetchPokemon = async (id) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();

        console.log(data);
    }
    catch (err) {
        console.error(err);
    }

};

fetchPokemon();


