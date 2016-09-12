import Ember from 'ember';

const { inject } = Ember;

export default Ember.Route.extend({
  'toriiSession': inject.service(),
  beforeModel() {
    if(this.get('toriiSession.isAuthenticated')) {
      console.log('authenticated ok');
    } else {
      this.transitionTo('login');
    }
  }
});
