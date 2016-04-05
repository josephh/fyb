// routes/secure/entries
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    // GET /entries
    return this.store.findAll('entry');
  } 
});
