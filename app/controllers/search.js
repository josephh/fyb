import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    search(species, locationName) {
      debugger;
      console.log(species, locationName);
    }
  }
});
