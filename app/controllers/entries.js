import Ember from 'ember';
import Entry from '../models/entry';

export default Ember.Controller.extend({
  actions:{
    createEntry: function(){
      var date = this.getController.get('date');
      var entry =  Entry.create({id: '101', date: date});
      entries.pushObject(entry);
      this.get('controller').set('date', '');
      this.transitionTo('entries.entry', entry);
    }
  },
  noEntries: function() {
    return this.get('model.length') === 0;
  }.property('model.length')
});
