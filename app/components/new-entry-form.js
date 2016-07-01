// app/components/new-entry.js
import Ember from 'ember';

  const conditionLabels = ['sunny', 'rainy', 'overcast', 'windy'],
    waterOptions = Ember.A([
    {value: 'river', label: 'River'},
    {value: 'stillwater', label: 'Stillwater'},
    {value: 'sea', label: 'Sea'}
  ]);

export default Ember.Component.extend({
  store: Ember.inject.service(),
  geolocation: Ember.inject.service(),
  'fish-species': Ember.inject.service(),
  'metric-imperial-fixtures': Ember.inject.service(),
  compositeWeight: Ember.computed('weightMajor', 'weightMinor', function() {
    return Number(this.get('weightMajor') + '.' + this.get('weightMinor'));
  }),
  compositeLength: Ember.computed('lengthMajor', 'lengthMinor', 'lengthUnit', function() {
    return Number(this.get('lengthMajor') + '.' + this.get('lengthMinor'));
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
    let component = this;
    component._super(...arguments);
    component.set('waterOptions', waterOptions);
    component.set('water', this.get('waterOptions.firstObject.value'));
    component.set('unitLabels', this.get('metric-imperial-fixtures').get('data'));
    component.set('specie', 'Other');
    component.set('speciesOptions', Ember.computed('water', function() {
      if ( component.get('water') === 'river' || component.get('water') === 'stillwater' ) {
        return Ember.ArrayProxy.create({ content: component.get('fish-species').get('freshwaterSpecies') });
      } else {
        return Ember.ArrayProxy.create({ content: component.get('fish-species').get('saltwaterSpecies') });
      }
    }));
    component.set('weightUnits', this.get('unitLabels.firstObject.weightUnits'));
    component.set('lengthUnits', this.get('unitLabels.firstObject.lengthUnits'));

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
    weightUnitSelected(weightUnit) {
      this.set('weightUnits', this.get('metric-imperial-fixtures')
        .get('data')
        .filterBy('value', weightUnit)
        .get('firstObject.weightUnits'));
    },
    lengthUnitSelected(lengthUnit) {
      this.set('lengthUnits', this.get('metric-imperial-fixtures')
        .get('data')
        .filterBy('value', lengthUnit)
        .get('firstObject.lengthUnits'));
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
      newEntry.set('weightUnits', this.get('weightUnits'));
      newEntry.set('lengthUnits', this.get('lengthUnits'));
      newEntry.set('weightUnits', this.get('weightUnits'));
      newEntry.set('lengthUnits', this.get('lengthUnits'));
      newEntry.set('weight', this.get('compositeWeight'));
      newEntry.set('length', this.get('compositeLength'));

      console.log('NEW Entry >>>');
      console.log(`water? ${newEntry.get('location.water')}`);
      console.log(`fish? ${newEntry.get('species')}`);
      console.log(`weight? ${newEntry.get('weight')},
        ${newEntry.get('weightUnits.0.text')} ${newEntry.get('weightUnits.1.text')}`);
      console.log(`weight? ${newEntry.get('length')},
        ${newEntry.get('lengthUnits.0.text')} ${newEntry.get('lengthUnits.1.text')}`);

      // newEntry.save();
    },
    done() {
      debugger;
    },
    typeAheadMatch() {
      console.log("type ahead match");
    },
    typeAheadNoMatch() {
      console.log("type ahead no match");
    }
  }
});
