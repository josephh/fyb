// application route
import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
    actions: {
        sessionRequiresAuthentication: function() {
            this.get('session')
                .authenticate('simple-auth-authenticator:jwt', { password: ''} )
                .then(function(){
                    console.log('custom token authentication successful!');
                }, function (error) {
                    console.log('custom token authentication failed!', error);
                });
        },
        login: function(provider) {
          console.log('login with ' + provider);
        },

        create: function(provider) {
          console.log('create with ' + provider);
        }
    }
});
