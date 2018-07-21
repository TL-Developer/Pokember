import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model () {
    return RSVP.hash({
      pokemon: this.store.createRecord('pokemon'),
      pokemons: this.store.findAll('pokemons')
    });
  }
});
