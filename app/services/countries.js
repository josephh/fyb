import Ember from 'ember';

export default Ember.Service.extend({
  init() {
    this.set('knownCountries', []);
  }
});
