import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    let x = this.store.peekRecord('entry', params.entryId);
    return x || this.store.findRecord('entry', params.entryId);
  }
});
