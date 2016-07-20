// app/routes/add-entry.js
import Ember from 'ember';

export default Ember.Route.extend({

  loadPhoto(url) {
    const {resolve, reject, promise} = RSVP.defer();
    const img = new Image();
    img.src = url;
    img.onload = () => { resolve(img); };
    img.onerror = reject;

    return promise;
  },

  actions: {
    saveConfirmed(newEntryId) {
      this.transitionTo('save-confirmation', newEntryId);
    }
  }

});
