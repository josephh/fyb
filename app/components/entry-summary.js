import Ember from 'ember';

const { set, isNone } = Ember;

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    // debugger;
    if(isNone(this.get('model.images')))
    {
      set(this.get('model'), 'images', Ember.A(['images/logo.svg']));
    }
  }
});
