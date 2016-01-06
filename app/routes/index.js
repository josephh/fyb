import Ember from 'ember';
export default Ember.Route.extend( {

  beforeModel() {
    if(this.authService.isAuthenticated()){
      console.log('is authenticated...');
      this.transitionTo('secure.entries');
    }else{
      console.log('NOT authenticated!');
      this.transitionTo('users');
    }
  },

  actions: {
    invalidateSession: function(){
      this.authService.setAuthenticated(false);
      console.log('invalidate session TODO');
      return true;
    }
  }

});
