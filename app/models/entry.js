import Ember from 'ember';

export default Ember.Object.extend({
  id: '',
  journalId: '',
  date: '',
  location : {
    name: '',
    lat: '',
    long: '',
    postcode: ''
  },
  fishes: []
});
