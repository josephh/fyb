// /app/routes/application.js
import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.authenticatedRoute('secure', function(){
    this.authenticatedRoute('owner', {path: '/:ownerId'}, function(){
      this.route('new');
    });
  });
  this.route('entries');
  this.route('search');
});

export default Router;
