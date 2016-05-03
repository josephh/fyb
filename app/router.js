// /app/routes/application.js
import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.authenticatedRoute('secure', function(){
    this.authenticatedRoute('owner', {path: '/:ownerId'}, function(){
      this.authenticatedRoute('entries');
      this.route('new');
    });
  });
  this.route('search');
});

export default Router;
