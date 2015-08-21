import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

//      /journals/
//      /journals/:year-id
//      /journals/:year-id/entries
//      /entries/:id (once we have the entry id, that's unique - we no longer
//        need to reference the journal.
/* Note, resource and route are both available as methods here: resource resets
the namespace, route appends. */
Router.map(function() {
  // this.route('...');
  // further nested routes under 'entry' can go here
  //this.route('journals', { path: ':slug' }, function(){
  //  this.route('entries', { path: ':slug' });
  // });
  this.resource('journals', function(){
    this.resource('journal', {path: ':slug'}, function(){
        this.route('entries');
    });
  });
});

export default Router;
