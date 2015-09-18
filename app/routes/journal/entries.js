import Ember from 'ember';
import Entry from '../../models/entry';

export default Ember.Route.extend({
  model : function(){
    return this.modelFor('journal').get('entries');
  },
  actions: {
    createEntry: function(){
      var journal = this.modelFor('journal');
      var date = this.controller.get('date');

      var entry = Entry.create({date: date, journalId: journal.id});
      journal.get('entries').pushObject(entry);
      this.get('controller').set('date', '');
    },
    updateRating: function(params) {
      var entry = params.item, rating = params.rating;
      entry.set('rating', rating);
    }
  }
});
