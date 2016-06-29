// app/components/new-entry.js
import Ember from 'ember';

const metricLength = 'cm',
 imperialLength = 'feet and inches',
 metricWeight = 'grams',
 imperialWeight = 'pounds and ounces';

var lengthUnitLabels = Ember.A([imperialLength, metricLength]),
  weightUnitLabels = Ember.A([imperialWeight, metricWeight]),
  conditionLabels = Ember.A(['sunny', 'rainy', 'overcast', 'windy']);

export default Ember.Component.extend({
  store: Ember.inject.service(),
  geolocation: Ember.inject.service(),
  'fish-species': Ember.inject.service(),
  water: 'river', // stillwater or sea
  waterOptions: Ember.A([
    {value: 'river', label: 'River'},
    {value: 'stillwater', label: 'Stillwater'},
    {value: 'sea', label: 'Sea'}
  ]),
  specie: 'Other',
  speciesOptions: Ember.computed('water', function() {
    if ( this.get('water') === 'river' || this.get('water') === 'stillwater' ) {
      return Ember.ArrayProxy.create({ content: this.get('fish-species').get('freshwaterSpecies') });
    } else {
      return Ember.ArrayProxy.create({ content: this.get('fish-species').get('saltwaterSpecies') });
    }
  }),
  weightUnit: weightUnitLabels[0],
  weightUnits: weightUnitLabels,
  weightMajor: 0,
  weightMinor: 0,
  isMetricWeight: Ember.computed('weightUnit', function() {
    if(this.get('weightUnit') === metricWeight) {
      return true;
    } else {
      return false;
    }
  }),
  compositeWeight: Ember.computed('weightMajor', 'weightMinor', 'weightUnit', function() {
    if(this.get('weightUnit') === metricWeight) {
      return this.get('weightMajor');
    } else {
      return this.get('weightMajor') + ',' + this.get('weightMinor');
    }
  }),
  lengthUnit: lengthUnitLabels[0],
  lengthUnits: lengthUnitLabels,
  lengthMajor: 0,
  lengthMinor: 0,
  isMetricLength: Ember.computed('lengthUnit', function() {
    if(this.get('lengthUnit') === metricLength) {
      return true;
    } else {
      return false;
    }
  }),
  compositeLength: Ember.computed('lengthMajor', 'lengthMinor', 'lengthUnit', function() {
    if(this.get('lengthUnit') === metricLength) {
      return this.get('lengthMajor');
    } else {
      return this.get('lengthMajor') + ',' + this.get('lengthMinor');
    }
  }),
  conditions: conditionLabels[0],
  conditionsOptions: Ember.ArrayProxy.create({ content: conditionLabels}),

  country: '',
  name: '',
  address: '',
  lat: '',
  long: '',
  startZoom: 16,
  init() {
    var component = this;
    this._super(...arguments);
    var lat, long, formattedAddress, google, geocoder;
    this.get('geolocation').getLocation().then(function(geoObject) {
      lat = geoObject.coords.latitude;
      long = geoObject.coords.longitude;
      component.set('lat', lat);
      component.set('long', long);
    //   let google = component.get('google').maps;
    //   geocoder = new google.Geocoder();
    //   geocoder.geocode({location:{lat: lat, lng: long}},function(resultArray, status){
    //     if(resultArray.length > 0){
    //       component.set('address', resultArray[0].formatted_address);
    //     }
    //   });

    });

  },
  focusOutCallback() {
    console.log('focus out callback');
  },
  placeChangedCallback() {
    console.log('place changed callback');
  },
  actions: {
    waterSelected(waterType) {
      this.set('water', waterType);
    },
    fishTypeSelected(fishType) {
      this.set('specie', fishType);
    },
    onLocationChangeHandler(lat, lng, results) {
      Ember.Logger.log(`lat: ${lat}, lng: ${lng}`);
      Ember.Logger.debug(results);
    },
    // placeChanged(googlePlacesResponse){
    //   // sometimes the response is a string (cached formatted string from previous search?)
    //   if(typeof  googlePlacesResponse === 'object'){
    //     let lat = googlePlacesResponse.geometry.location.lat(),
    //       long = googlePlacesResponse.geometry.location.lng();
    //       if(lat && long){
    //         this.set('lat', lat);
    //         this.set('long', long);
    //       }
    //   }
    // },
    addEntry() {
      let newEntry = this.get('store').peekRecord('entry', this.get('entryId'));
      newEntry.set('location', this.get('store').createFragment('location', {water: this.get('water')}));
      newEntry.set('species', this.get('specie'));

      console.log('NEW Entry >>>');
      console.log(`water? ${newEntry.get('location.water')}`);
      console.log(`fish? ${newEntry.get('species')}`);

      // newEntry.save();
    },
    done() {
      debugger;
    }
  }
});
