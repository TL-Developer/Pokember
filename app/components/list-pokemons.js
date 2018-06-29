import Component from '@ember/component';

export default Component.extend({

  actions: {
    getPokemon (pokemon) {
      debugger
      console.log(pokemon.id)
    }
  }
});
