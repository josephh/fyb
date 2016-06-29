import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    selectionChanged (val) {
      this.sendAction('onChange', val);
    }
  }
});
