import Component from '@ember/component';
import {inject as service} from '@ember/service';
import {set, get} from '@ember/object';

export default Component.extend({
  store: service(),
  actions: {
    getPokemon (pokemon) {
      let PokemonModel = this.get('model.pokemon');
      set(this.model, 'pokemon', pokemon);
      // PokemonModel.set(pokemon);
      // PokemonModel.save();
    }
  }
});
