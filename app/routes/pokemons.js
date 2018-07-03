import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model () {
    // const uriPokemons = "https://pokeapi.co/api/v2/pokemon/?limit=20";
    // const getPokemons = () => {
    //   return $.getJSON(uriPokemons).then(data => {
    //     return data.results;
    //   });
    // };

    // return RSVP.hash({
    //   pokemon: this.store.createRecord('pokemon'),
    //   pokemons: getPokemons()
    // })

    return RSVP.hash(
      this.store.findAll('pokemons')
    )
  }
});
