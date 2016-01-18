// application route '/'
import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('users', function(){
    this.route('create');
  });
  this.route('secure', function(){
    this.route('entries');
  });
});

export default Router;
