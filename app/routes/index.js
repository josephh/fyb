// routes/index.js
/**
 * App.Index Route is the default route, and will render the index template when
 * the user visits / (unless / has been overridden by your own custom route).
 */
import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    authorizeProvider(providerName) {
      let controller = this.controller;
      controller.setProperties({
        authData: null,
        authError: null
      });

      this.get('torii').open(providerName).then(authData => {
        controller.set('authData', JSON.stringify(authData));
      }).catch(err => {
        controller.set('authError', err);
      });
    }
  }
});
