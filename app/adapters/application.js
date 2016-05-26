import Ember from 'ember';
import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://localhost:9000',
  headers: Ember.computed('torriSession.authToken', function() {
    return {
      "Authorization": 'Bearer ' + localStorage['torii-user-session-id'],
      "Content-Type": 'application/vnd.api+json'
    };
  })
});
