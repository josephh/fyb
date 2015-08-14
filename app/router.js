import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

//      /journals/
//      /journals/:year
//      /journals/:year/entries
//      /journals/:year/entries/:datetime
/* Note, resource and route are both available as methods here: resource resets
the namespace, route appends. */
Router.map(function() {
  // this.resource('journals', {path: ':slug'}, function(){
    // this.resource('entries', {path: ':slug'},function(){
      // this.route('...');
      // further nested routes under 'entry' can go here

  //this.route('journals', { path: ':slug' }, function(){
  //  this.route('entries', { path: ':slug' });
  // });
this.route('journals');
this.route('entries');


});

export default Router;
