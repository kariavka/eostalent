import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://127.0.0.1:4000',
  namespace: 'api',
});
