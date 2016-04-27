// app/routes/secure/owner/entries.js
import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let ownerId = this.modelFor('secure.owner').id;
    return this.store.query('entry',
      {offset: (params && params.offset) || 5, page: (params && params.page) || 1, owner: ownerId});
  },
  afterModel() {
     this.set('owner', this.modelFor('owner'));
  }
});
