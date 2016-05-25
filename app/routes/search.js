import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    search(name, species){
      this.transitionTo('entries', {queryParams: {page: 1, offset: 50, locationName: name, fish: species}});
    }
  }
});
