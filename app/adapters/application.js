import Ember from 'ember';
import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  namespace: 'api',
  host: 'http://private-fc323-fyb1.apiary-mock.com',
  headers: Ember.computed('torriSession.authToken', function() {
    return {
      "Authorization": 'Bearer ' + localStorage['torii-user-session-id'],
      "Content-Type": 'application/vnd.api+json'
    };
  })
});
