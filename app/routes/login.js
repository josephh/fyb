// routes/users - NOT a secure route
import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    login(provider) {
      console.log('do log in with ' + provider);
      var providerName = null;
      if (provider.toLowerCase() === 'google') {
        providerName = 'google-oauth2';
      } else if (provider.toLowerCase() === 'facebook'){
        providerName = 'facebook-oauth2';
      } else {
        // /* to do */ providerName = 'twitter-oauth1'
      }

      let controller = this;
      let session = this.get('session');

      controller.set('error', null);

      session.open(providerName).then(() => {
        controller.transitionTo('secure.entries');
        // no-op, we are signed in
        if (session.attemptedTransition) {
          session.attemptedTransition.retry();
          session.attemptedTransition = null;
        }
      }).catch(err => {
        Ember.run(controller, 'set', 'error', err);
      });
    }
  }

});
