import { computed, observer, get, set } from '@ember/object';
import Component from '@ember/component';

export default Component.extend({

  // isDisabled: false,
  store: Ember.inject.service(),

  // pokemon: computed('pokemon', function() { 
  //   return this.store.findAll('pokemon');
  // }),

  // pokemon: observer('pokemon', function() { 
  //   debugger
  //   console.log('observer is called', this.get('pokemon')); 
  // }),

  // isDisabled: computed('pokemon', function() {
  //   return this.get('pokemon') === '';
  // })
});
