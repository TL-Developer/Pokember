import DS from 'ember-data';
import config from 'ember-get-config';

export default DS.RESTAdapter.extend({
  host: config.host,
  namespace: config.namespace
});
