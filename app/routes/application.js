// routes/application.js
/** ApplicationRoute is entered when your app first boots up.
 * It renders the application template.
 */
import Ember from 'ember';

var providers = Ember.Object.extend({
   authProviders: []
 }).create({
   authProviders: Ember.ArrayProxy.create( {
     content: Ember.A(['Google', 'Facebook', 'Twitter'])
   } )
 });

export default Ember.Route.extend( {
  model () {
    return providers;
  },
  actions: {
    logout() {
      this.get('toriiSession').close();
    },
  login(provider) {
    console.log('do log in with ' + provider);
    var providerName = '', route = this,
          controller = this.controllerFor('application');
    if (provider.toLowerCase() === 'google') {
      providerName = 'google-oauth2';
    } else if (provider.toLowerCase() === 'facebook'){
      providerName = 'facebook-oauth2';
    } else {
      // /* to do */ providerName = 'twitter-oauth1'
    }

    let session = route.get('toriiSession');

    controller.set('error', null);

    session.open(providerName).then(() => {
      route.transitionTo('secure.entries');
      // no-op, we are signed in
      if (session.attemptedTransition) {
        session.attemptedTransition.retry();
        session.attemptedTransition = null;
      }
    }).catch(err => {
      Ember.run(controller, 'set', 'error', err.message);
    });
  }
  }
});
