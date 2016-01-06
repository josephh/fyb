import Ember from 'ember';
/*
 * Create user route
 * TODO needs auth service
 */
export default Ember.Route.extend( {
  actions: {
    createUser: function(){
      console.log('in createUser action');
    }
  },
  model() {
    return this.store.findAll('users');
  }

});
