import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let ownerId = this.modelFor('secure.owner').id;
    return this.store.query('entry', {offset: 5, page: 1, owner: ownerId});
  },
  afterModel() {
     this.set('owner', this.modelFor('owner'));
  }
});
