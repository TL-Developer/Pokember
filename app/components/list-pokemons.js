import Component from '@ember/component';
import {inject as service} from '@ember/service';
import {set, get} from '@ember/object';

export default Component.extend({
  store: service(),

  actions: {
    getPokemon (pokemon) {
      set(this, 'pokemon', {
        name: 'pikachu',
        weight: '234'
      });
      // $.getJSON(pokemon.url).then(pokemon => {
      //   debugger
      //   set(this, 'pokemon', pokemon.name)
      // });
    }
  }
});
