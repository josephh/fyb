import Ember from 'ember';

export default Ember.Object.extend({
  id: '',
  journalId: '',
  date: '',
  rating: 0,
  location : {
    name: '',
    lat: '',
    long: '',
    postcode: ''
  },
  fishes: []
});
