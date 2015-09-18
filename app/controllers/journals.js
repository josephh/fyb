import Ember from 'ember';

export default Ember.Controller.extend({
  date: '',
  isDisabled: function() {
    return Ember.isEmpty(this.get('date'));
  }.property('date')

});
