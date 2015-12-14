import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('users', function(){
    /*  The path param can be omitted if it has the same name as the route.
     *  For example, this.route('login', {path: '/google-login'});
     */
    this.route('login-with-google');
    this.route('login-with-facebook');
    this.route('create-with-google');
    this.route('create-with-facebook');
  });
  this.route('secure', function() {
    this.route('entries');
  });
});

export default Router;
