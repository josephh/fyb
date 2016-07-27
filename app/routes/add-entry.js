// app/routes/add-entry.js
import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    saveConfirmed(newEntryId) {
      this.transitionTo('save-confirmation', newEntryId);
    }
  }

});
