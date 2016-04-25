import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let ownerId = this.modelFor('secure.owner').id,
      offset = (params && params.offset ? params.offset : 5),
      (params && params.page ? params.page : 1)
    return this.store.query('entry',
      {offset: offset, page: page, owner: ownerId});
  },
  afterModel() {
     this.set('owner', this.modelFor('owner'));
  }
});
