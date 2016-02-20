// application route '/'
import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.authenticatedRoute('secure', function(){
    this.authenticatedRoute('entries');
  });
});

export default Router;
