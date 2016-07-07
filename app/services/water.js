import Ember from 'ember';

export default Ember.Service.extend({
  init() {
    this._super(...arguments);
    this.set('waterOptions', Ember.A([
        {value: 'river', label: 'River'},
        {value: 'stillwater', label: 'Stillwater'},
        {value: 'sea', label: 'Sea'}
      ]));
    }
});
