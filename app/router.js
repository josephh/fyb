// /app/routes/application.js
import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('/');
  this.route('entries');
  this.route('entry', {path: '/entries/:entryId'});
  this.route('my-entries');
  this.route('add-entry');
  this.route('login');
});

export default Router;
