import Route from '@ember/routing/route';

export default Route.extend({

  model () {
    let Pokemons = [];

    return $.getJSON('https://pokeapi.co/api/v2/pokemon/?limit=40').then(data => {
      return data.results
    });
  }

});
