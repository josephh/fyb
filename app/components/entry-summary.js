import Ember from 'ember';

const { set, isNone } = Ember;

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    if(isNone(this.get('model.image')))
    {
      set(this.get('model'), 'image', 'images/logo.svg');
    }
  }
});
