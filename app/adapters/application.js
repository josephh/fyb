import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'api',
  host: 'http://private-fc323-fyb1.apiary-mock.com',
  headers:Ember.computed('session.authToken', function() {
    return {
      "Authorization": 'Bearer ' + this.get("session.authToken")
    };
  })
});
