import Ember from 'ember';

export default Ember.Component.extend({
  fishFilterChecked:false,
  countryFilterChecked: false,
  placeFilterChecked: false,
  actions: {
    onFishSelected(value) {
      this.sendAction('fishSelected', value);
    }
  }
});
