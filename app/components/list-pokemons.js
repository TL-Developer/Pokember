import Component from '@ember/component';
import {inject as service} from '@ember/service';
import {set, get} from '@ember/object';

export default Component.extend({
  store: service(),
  actions: {
    getPokemon (pokemon) {
      debugger
      this.get('store').findRecord('pokemon', 2).then(function(pok) {
        // set(this.model, 'pokemon', pok);
      });
    }
  }
});
