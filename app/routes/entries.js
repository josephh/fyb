// app/routes/entries.js
import Ember from 'ember';

const { inject } = Ember;

export default Ember.Route.extend({
  filter: Ember.Object.create({}),
  classBindings: [],
  attributeBindings: [],
  'fish-species': inject.service(),
  'toriiSession': inject.service(),
  beforeModel() {
    if(this.get('toriiSession.isAuthenticated')) {
      console.log('authenticated ok');
    } else {
      this.transitionTo('login');
    }
  },
  model(params) {
    let entries = this.store.findAll('entry', params);
    return {
      entries: entries,
      freshwaterSpecies: this.get('fish-species').get('freshwaterSpecies')
    }
  },
  actions: {
    fishSelected(value) {
      this.set('filter.fishSpecies', value);
    }
  }
});
