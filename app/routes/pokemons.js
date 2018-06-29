import Route from '@ember/routing/route';

export default Route.extend({

  model () {
    const uriPokemons = "https://pokeapi.co/api/v2/pokemon/?limit=20";

    return $.getJSON(uriPokemons).then(data => {
      return data.results;
    });
  }

});
