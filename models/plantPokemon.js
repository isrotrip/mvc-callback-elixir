'use strict';

const Pokemon = require('./pokemon.js');

class PlantPokemon extends Pokemon {
  constructor(id, name) {
    super(id, name, 'plant');
  }
}

module.exports = PlantPokemon;