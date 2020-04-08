'use strict';

const Model = require('../models/model.js');
const View = require('../views/view.js');

class PokemonController {
  static list() {
    Model.list(function (err, pokemons) {
      if (err) {
        View.showError(err);
      } else {
        View.showList(pokemons);
      }
    });
  }

  static create(arrBody) {
    const objPokemon = {
      name: arrBody[0],
      type: arrBody[1]
    }
    
    Model.create(objPokemon, function (err, newPokemon, pokemons) {
      if (err) {
        View.showError(err);
      } else {
        View.showSuccess({
          message: 'Create pokemon success',
          data: {
            newPokemon,
            pokemons
          }
        });
      }
    });
  }
}

module.exports = PokemonController;