import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    authenticateWithGoogle() {
      debugger;
      console.log('action authenticateWithGoogle');
    },
    authenticateWithFacebook() {
      console.log('action authenticateWithFacebook')
    },
    authenticateWithTwitter() {
      console.log('action authenticateWithTwitter');
    }
   }

});
