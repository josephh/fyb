import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    login: function(provider) {
      console.log('action handler - login (' + provider + ')');
      this.controller.set('loginWith', provider);  // 'this' is the route
    }
  }
});
