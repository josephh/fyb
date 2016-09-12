// app/routes/add-entry.js
import Ember from 'ember';

const { inject } = Ember;

export default Ember.Route.extend({
  'toriiSession': inject.service(),
  beforeModel() {
    if(this.get('toriiSession.isAuthenticated')) {
      console.log('authenticated ok');
    } else {
      this.transitionTo('login');
    }
  },
  actions: {
    saveConfirmed(newEntryId) {
      this.transitionTo('save-confirmation', newEntryId);
    }
  }

});
