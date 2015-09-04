import Ember from 'ember';
import Entry from '../../models/entry';
import Entry from '../models/fish';

export default Ember.Route.extend({
  model : function(){
    return this.modelFor('journal').get('entries');
  },
  actions: {
   createEntry: function(){
    var journal = this.modelFor('journal');
    var date = this.controller.get('date');

    var fishes =[]...
    var entry = Entry.create({date: date, journalId: journal.id});
    journal.get('entries').pushObject(entry);
    this.get('controller').set('date', '');
   }
  }
});
