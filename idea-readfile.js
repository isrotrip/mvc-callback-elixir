'use strict';

const fs = require('fs');
const PokemonFactory = require('./models/pokemonFactory');


// ========>> SYNC

// // latihan menggunakan sync dulu

// const pokemonString = fs.readFileSync('./pokemon.json', { encoding: 'utf-8' });
// const objPokemon = JSON.parse(pokemonString);

// // jangan diubah ke instance
// const pokemons = [];

// for (let i = 0; i < objPokemon.length; i++) {
//   pokemons.push(PokemonFactory.create(objPokemon[i]))
// }

// // selesai tinggal di view
// console.log(pokemons)

// ========>> ASYNC

function readAsync(cb) {
  fs.readFile('./pokemon.json', { encoding: 'utf-8' }, function (err, pokemonString) {
    if (err) {
      cb(err, null, null)
    } else {
      const objPokemon = JSON.parse(pokemonString);
      const pokemons = [];
  
      for (let i = 0; i < objPokemon.length; i++) {
        pokemons.push(PokemonFactory.create(objPokemon[i]))
      }

      cb(null, pokemons, pokemons.length);
    }
  });
}

function showPokemon(err, pokemons, totalDataPokemon) {
  if (err) {
    console.log('aduh error');
    console.log(err);
  } else {
    console.log('tidak ada dusta');
    console.log(`total dataPokemon adalah: ${totalDataPokemon}`)
  }
}

// readAsync(showPokemon);

readAsync(function (err, pokemons, totalDataPokemon) {
  if (err) {
    console.log('aduh error');
    console.log(err);
  } else {
    console.log('tidak ada dusta');
    console.log(`total dataPokemon adalah: ${totalDataPokemon}`)
  }
});


