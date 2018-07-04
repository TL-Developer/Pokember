import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://pokeapi.salestock.net/api/v2',
  pathForType: () => {
    return 'pokemon'
  }
  // urlForQuery: (query, modelName) => {
  //   return `${this.host}${query}.json`
  // }
});
