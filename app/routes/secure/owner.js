import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    // TODO - end point required for this - since any anonymous user can browse anyone's timeline
    // this.store('owner', params.ownerId);

    let owner =  this.store.peekRecord('owner', params.ownerId);
    if(owner) {
      return owner;
    }else{
      this.store.push({
        data: {
          // primary data for single record of type `Person`
          id:  params.ownerId,
          type: 'owner',
          attributes: {
            ownerId:  params.ownerId
          }
        }
      });

      return this.store.peekRecord('owner', params.ownerId);
    }
  }
  /** /,
  afterModel() {
    return this.transitionTo('secure.owner.entries');
  }
  /**/
});
