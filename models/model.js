'use strict';

const fs = require('fs');
const PokemonFactory = require('./pokemonFactory');

class Model {
  static list(cb) {
    fs.readFile('./pokemon.json', { encoding: 'utf-8' }, function (err, pokemonString) {
      if (err) {
        cb(err, null);
      } else {
        const objPokemon = JSON.parse(pokemonString);
        const pokemons = [];
  
        for (let i = 0; i < objPokemon.length; i++) {
          pokemons.push(PokemonFactory.create(objPokemon[i]))
        }

        cb(null, pokemons);
      }
    });
  }

  static create(objPokemon, cb) { // { name: 'Arcanine', type: 'fire' }
    Model.list(function (err, pokemons) {
      if (err) {
        cb(err, null, null);
      }

      let id = 1;

      if (pokemons.length > 0) {
        id = pokemons[pokemons.length - 1].id + 1;
      }

      objPokemon.id = id;
      const newPokemon = PokemonFactory.create(objPokemon);

      pokemons.push(newPokemon);

      Model.save(pokemons, function (err) {
        if (err) {
          cb(err, null, null);
        }

        cb(null, newPokemon, pokemons);
      });
    });
  }

  static save(pokemons, cb) {
    pokemons = JSON.stringify(pokemons, null, 2);

    fs.writeFile('./pokemon.json', pokemons, { encoding: 'utf-8' }, function (err) {
      if (err) {
        cb(err);
      } else {
        cb(null);
      }
    });
  }
}

module.exports = Model;