// app/routes/secure/owner/entries.js
import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    debugger;
    return this.store.query('entry', {
      offset: (params && params.offset) || 5,
      page: (params && params.page) || 1,
      owner: ownerId,
      location: params.location,
      species: params.species
    });
  }
});
