// routes/users
import Ember from 'ember';

var authenticate = function(routeContext, provider, callback) {
  if (provider.toLowerCase() === 'google' && false === true) {
    console.log('<<< oauth2 implicit flow >>>');
    routeContext.get('toriiSession')
    /**
     * In the 'implicit' flow, the promise returned from 'open(...)' contains an
     * access token returned google, intended for direct use inside your app.
     * This flow can be entirely client-side: no adapter or session information
     * is relied on (and the ember implementation demonstrates this).
     */
    .open('google-oauth2-bearer')
      .then(authData => {
        console.log('FYB client >> Authenticated with Google.');
        var googleToken = authData.authorizationToken.access_token;
        console.log('Google access token = ' + googleToken + ".");

        // Now hand the access token to our FYB server
        routeContext.get('session')
          .authenticate('authenticator:jwt', { password: googleToken} )
          .then(callback(), function (error) {
          console.log('FYB client >> custom token authentication failed!',
            error.message);
      });
    }, function (error) {
      console.error('FYB client >> Google auth failed: ', error.message);
    });
  } else if (provider.toLowerCase() === 'google') {
    console.log('<<< oauth2 authorization code grant flow >>>');
    routeContext.get('toriiSession')
    /**
     * In the 'authorisation code grant' flow, the provider returns an authorisation
     * code (once authentication and redirection steps have finished).
     * Our FYB server then can use that authorization code, to go back to the
     * google apis - and fetch data from different google apps, for that end user.
     */
    .open('google-oauth2')
      .then(authData => {
        console.log('FYB client >> Authenticated with Google.');
        var prop = null;
        for (prop in authData){
          console.log('' + prop + ' = ' + authData[prop]);
        }
        var authToken = authData.authorizationCode;

        // Now hand the authorization code to our FYB server
        routeContext.get('session')
          .authenticate('authenticator:jwt', { identification: authToken} )
        .then(callback(), function (error) {
          console.log('custom token authentication failed!', error.message);
        });
      }, function (error) {
        console.error('Google auth failed: ', error.message);
      });
  } else if(provider.toLowerCase() === 'facebook') {
    console.log('<<< oauth2 implicit flow >>>');
    var controller = routeContext.controllerFor('users');
    console.log('FYB client >> attempt facebook authentication');
    routeContext.get('toriiSession').open('facebook-oauth2').then(function(authorization){
      // FB.api is now available. authorization contains the UID and
      // accessToken.
      console.log('FYB client >> authenticated ok with facebook');
      console.log('FYB client >> Facebook authentication details = ');
      console.log('\t' + authorization);
      controller.set('hasFacebook', true);
    });
  }

};

// NOT a secure route
export default Ember.Route.extend({
  session: Ember.inject.service(),

  actions: {
    login: function(authProvider){
      var that = this;
      console.log('do log in with ' + authProvider);
      /* authenticate(this, authProvider, function(){
        console.log('login callback for ' + authProvider);
        that.transitionTo('secure.entries');
      });
      */
      let {controller} = this;
      let session = this.get('toriiSession');

      controller.set('error', null);

      /* using session is slightly different to the torii object: the session
       * service will do the following,
       *   1. calling open will transition the session state to 'working'
       *   2. looks up the google-oauth2 provider and calls open on the provider
       *   3. then following obtaining the authorization code, passes it to an
       *      adapter.  (The service will look for an adapter with the same
       *      name as the provider (e.g. google-oauth2)) and if it doesn't find
       *      an adapter with that name, will fallback to an adapter called
       *      application.
       */
      session.open('google-oauth2').then(() => {
       if (session.attemptedTransition) {
          session.attemptedTransition.retry();
          session.attemptedTransition = null;
       } else {
         // redirect following sign on
         controller.transitionTo('secure.entries');
       }
      }).catch(err => {
        Ember.run(controller, 'set', 'error', err);
        console.log('error details: ' + err);
      });
    },
    create: function(authProvider){
      var that = this;
      console.log('do create user with ' + authProvider);
      authenticate(this, authProvider, function(){
        console.log('create callback for ' + authProvider);
        that.transitionTo('users.create');
      });
    }
  }
});
