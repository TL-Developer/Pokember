import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://pokeapi.co/api/v2',
  pathForType: () => {
    return 'pokemon'
  }
});
