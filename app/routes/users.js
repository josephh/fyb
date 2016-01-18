// routes/users
import Ember from 'ember';

var authenticate = function(routeContext, provider, callback) {

  if(provider.toLowerCase() === 'google' && false === true){  // false === true developer laziness...
    routeContext.get('torii')
    /**
    * In the 'implicit' flow, the promise returned from 'open(...)' contains an
    * access token returned google, intended for direct use inside your app.
    * This flow can be entirely client-side: no adapter or session information
    * is relied on (and the ember implementation demonstrates this).
    */
    .open('google-oauth2-bearer')
    .then(authData => {
      console.log('googleAuth var = ' + authData);
      var prop = null;
      for (prop in authData){
        console.log('next key = ' + prop + '; value = ' + authData[prop]);
      }
      var googleToken = authData.authorizationToken.access_token;  // access token
      console.log('Google token: ' + googleToken + " >>> now what?!");

      /*   This bit is for interacting with the jwt provider - i.e. our server
      routeContext.get('session')
      .authenticate('simple-auth-authenticator:jwt', { password: googleToken} )
      .then(callback(), function (error) {
      console.log('custom token authentication failed!', error.message);
    });
    */
  }, function (error) {
    console.error('Google auth failed: ', error.message);
  });
}else if(provider.toLowerCase() === 'google' ){
  routeContext.get('torii')
  /**
  * In the 'authorisation code grant' flow, the provider returns an authorisation
  * code (once the pop-up and redirection steps have finished). The app is
  * then responsible for translating that authorisation code into an actual
  * access token.  This is done by the client app passing the authorisation
  * code into the backend server, which will then use the authorisation code,
  * along with various bits of configuration (app secrets, endpoints etc) to
  * to get an access token from google's api.
  */
  .open('google-oauth2')
  .then(authData => {
    var prop = null;
    for (prop in authData){
      console.log('next key = ' + prop + '; value = ' + authData[prop]);
    }
    var authToken = authData.authorizationCode;  // auth code for later use
    console.log('Google auth token: ' + authToken);

    //  This bit is for interacting with the jwt provider - i.e. our server
    routeContext.get('session')
      .authenticate('authenticator:jwt', { identification: authToken} )
    .then(callback(), function (error) {
      console.log('custom token authentication failed!', error.message);
    });
  }, function (error) {
    console.error('Google auth failed: ', error.message);
  });
}else if(provider.toLowerCase() === 'facebook'){
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
