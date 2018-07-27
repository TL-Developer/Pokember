import { computed, observer, get, set } from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
  store: Ember.inject.service(),
  pokemon: computed('pokemon.name', function() {
    debugger 
    return this.store.findAll('pokemon/1');
  })
  // pokemon: observer('pokemon.name', function() {
  //   debugger 
  //   return this.store.findAll('pokemon/1');
  // })
});
