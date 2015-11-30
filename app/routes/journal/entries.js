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

      var entry = Entry.create({date: date, journalId: 1, id: 1});
      journal.get('entries').pushObject(entry);
      this.get('controller').set('date', '');
      this.transitionTo('entries.entry', entry);
    },
    updateRating: function(params) {
      var entry = params.item, rating = params.rating;
      entry.set('rating', rating);
    }
  },
  // TODO - this isn't working at the moment
  noEntries: function() {
    return this.get('model.length') === 0;
  }.property('model.length')
});
