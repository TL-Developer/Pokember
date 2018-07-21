import API from './api';
import DS from 'ember-data';

export default API.extend({
  urlTemplate: '{+host}/{+namespace}/',
  pathForType: () => {
    return 'pokemon'
  }
});
