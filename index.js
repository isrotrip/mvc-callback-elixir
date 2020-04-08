'use strict';

const PokemonController = require('./controllers/pokemon.js');

const command = process.argv[2];
const parameters = process.argv.slice(3);

switch (command) {
  case 'list':
    PokemonController.list();
    break;
  case 'create':
    PokemonController.create(parameters);
    break;
}