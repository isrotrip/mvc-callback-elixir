'use strict';

const Pokemon = require('./pokemon.js');

class FirePokemon extends Pokemon {
  constructor(id, name) {
    super(id, name, 'fire');
  }
}

module.exports = FirePokemon;