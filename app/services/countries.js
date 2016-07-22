import Ember from 'ember';

export default Ember.Service.extend({
  init() {
    this.set('knownCountries', []);
    this.set('countries', [
      'America',
      'Bulgaria',
      'China',
      'Denmark',
      'Egypt',
      'France',
      'Holland',
      'Iceland',
      'Jersey',
      'Kurdistan',
      'Latvia',
      'Mongolia',
      'Norway',
      'O',
      'Peru',
      'Qu',
      'Russia',
      'Tanzania',
      'Uruguay',
      'V'
    ])
  }
});
