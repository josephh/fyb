// routes/users
import Ember from 'ember';

var authenticate = function(routeContext, provider, callback) {
  if (provider.toLowerCase() === 'google' && false === true) {
    console.log('<<< oauth2 implicit flow >>>');
    routeContext.get('torii')
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
    routeContext.get('torii')
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
    console.log('facebook authentication');
    var controller = this.controllerFor('users');
    // The provider name is passed to `open`
    this.get('torii').open('facebook-oauth2').then(function(authorization){
      // FB.api is now available. authorization contains the UID and
      // accessToken.
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
      authenticate(this, authProvider, function(){
        console.log('login callback for ' + authProvider);
        that.transitionTo('secure.entries');
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
