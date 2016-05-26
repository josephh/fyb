// /app/routes/application.js
import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('entries', {path: '/'});
});

export default Router;
