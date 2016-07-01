import Ember from 'ember';

export default Ember.Component.extend({
  click(event) {
    this.sendAction('onChange', event.target.control.value);
  }
});
