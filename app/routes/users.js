import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

var authenticate = function(routeContext, provider, callback) {
  console.log('sessionRequiresAuthentication');

  if(provider.toLowerCase() == 'google'){
    routeContext.get('torii')
    .open('google-oauth2-bearer')
    .then(function(googleAuth){
      var googleToken = googleAuth.authorizationToken.access_token;
      console.log('Google authentication successful.');

      routeContext.get('session')
      .authenticate('simple-auth-authenticator:jwt', { password: googleToken} )
      .then(callback(),
       function (error) {
        console.log('custom token authentication failed!', error.message);
      });

    }, function (error) {
      console.error('Google auth failed: ', error.message);
    });
  }else if(provider.toLowerCase() == 'facebook'){
    console.log('facebook authentication');
  }

};

/*
 * Handle create user or login actions
 */
export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
    login: function(authProvider){
      console.log('do log in with ' + authProvider);
      authenticate(this, authProvider, function(authProvider){
        console.log('login callback for ' + authProvider);
  // should be in after or before model functions, and this behaviour in the controller, setting the properties to drive routing        this.transitionTo('secure.entries');
      });
    },
    create: function(authProvider){
      console.log('do create user with ' + authProvider);
      authenticate(this, authProvider, function(authProvider){
        console.log('create callback for ' + authProvider);
  // should be in after or before model functions, and this behaviour in the controller, setting the properties to drive routing
//        this.transitionTo('users.create');
      });
    }
  }
});
