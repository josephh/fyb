// ApplicationRoute entered on app start; renders the application template and handles actions
import Ember from 'ember';

export default Ember.Route.extend( {
  actions: {
    logout() {
      this.get('toriiSession').close();
    },
    accessDenied() {
      this.transitionTo('login');
    },
    login(provider) {
      
      let session = route.get('toriiSession');

      controller.set('error', null);

      route.transitionTo('search');

/** TODO commented out, pending implementation of authentication patterns.
The app should probably default to the anonymous "search entries" page in the absence of login; but go to the
logged-in user's timeline when they are signed in **/
      // session.open(providerName).then(() => {
      //   route.transitionTo('secure.owner.entries', session.get('currentUser').id);
      // }).catch(err => {
      //   Ember.run(controller, 'set', 'error', 'Could not sign you in: ' + err.message);
      // });
    }
  }

});
