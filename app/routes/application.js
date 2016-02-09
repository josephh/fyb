// routes/application.js
import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend( ApplicationRouteMixin, {

  /*
   * employing the ember-simple-auth service 'session'...
   */
  beforeModel() {
    if(this.get('session').isAuthenticated === true){
      console.log('is authenticated...');
      this.transitionTo('secure.entries');
    }else{
      console.log('NOT authenticated!');
      this.transitionTo('users');
    }
  },
  actions: {
    invalidateSession: function(){
      this.get('session').invalidate();
    }
  }

});
