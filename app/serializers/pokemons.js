import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    return {
      data: payload.results.map((pokemon) => {
        return {
          id: pokemon.url.match(/(\/)\d+(?=\/)/)[0].replace('/', ''),
          type: 'pokemons',
          attributes: pokemon
        }
      })
    }
  },
});
