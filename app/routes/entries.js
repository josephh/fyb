// app/routes/entries.js
import Ember from 'ember';

const { inject } = Ember;

export default Ember.Route.extend({
  filter: Ember.Object.create({}),
  'fish-species': inject.service(),
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
