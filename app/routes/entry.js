import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    let entry = this.store.peekRecord('entry', params.entryId);
    if (!entry){
      entry = this.store.findRecord('entry', params.entryId);
    }
    return entry;
  }
});
