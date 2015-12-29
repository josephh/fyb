import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {

  beforeModel() {
    var session = this.get('session');
    if(session.isAuthenticated){
      console.log('is authenticated...');
      this.transitionTo('secure.entries');
    }else{
      console.log('NOT authenticated!');
      this.transitionTo('users');
    }
  }

});
