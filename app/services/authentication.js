import Ember from 'ember';

var Authentication = Ember.Object.extend({
  authenticated: null
});

export default Ember.Service.extend({

    init() {
//      this._super(...arguments);
      var auth = Authentication.create({authenticated: false});
      this.set('auth', auth);
    },

    isAuthenticated: function () {
      return this.auth.authenticated;
    },

    setAuthenticated(isAuthenticated) {
      console.log('set authenticated to : ' + isAuthenticated);
      this.auth.authenticated = isAuthenticated;
    }

  });
