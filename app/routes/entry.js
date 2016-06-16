import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    let entry = this.store.peekRecord('entry', params.entryId);
    if (!entry){
      entry = this.store.findRecord('entry', params.entryId);
    }
    if(entry.length && entry.weight) {
      return {
        catch: entry,
        showLengthAndWeight: true
      }
    } else {
      return {catch: entry};
    }
  }
});
