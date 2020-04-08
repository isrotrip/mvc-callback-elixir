'use strict';

const FirePokemon = require('./firePokemon.js');
const PlantPokemon = require('./plantPokemon.js');

class PokemonFactory {
  static create(pokemon) { // { id: 1, name: 'bulbasaur', type: 'plant' }
    let { id, name, type } = pokemon;

    if (type === 'plant') {
      return new PlantPokemon(id, name);
    } else if (type === 'fire') {
      return new FirePokemon(id, name);
    } else {
      throw `Type ${type} is not available`;
    }
  }
}

module.exports = PokemonFactory;