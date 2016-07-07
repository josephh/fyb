// app/components/new-entry.js
import Ember from 'ember';

  const { set } = Ember;

export default Ember.Component.extend({
  store: Ember.inject.service(),
  geolocation: Ember.inject.service(),
  'fish-species': Ember.inject.service(),
  'metric-imperial-fixtures': Ember.inject.service(),
  'typeahead-config': Ember.inject.service(),
  water: Ember.inject.service(),
  compositeWeight: Ember.computed('weightMajor', 'weightMinor', function() {
    return Number(this.get('weightMajor') + '.' + this.get('weightMinor'));
  }),
  compositeLength: Ember.computed('lengthMajor', 'lengthMinor', 'lengthUnit', function() {
    return Number(this.get('lengthMajor') + '.' + this.get('lengthMinor'));
  }),

  init() {
    let component = this,
      newEntry = this.get('newEntry');
    component._super(...arguments);
    component.set('waterOptions', this.get('water').get('waterOptions'));
    component.set('unitLabels', this.get('metric-imperial-fixtures').get('data'));
    component.set('speciesOptions', Ember.computed('newEntry.{location.water}', function() {
      if ( this.get('newEntry.location.water') === 'river' || this.get('newEntry.location.water') === 'stillwater' ) {
        return Ember.ArrayProxy.create({ content: component.get('fish-species').get('freshwaterSpecies') });
      } else {
        return Ember.ArrayProxy.create({ content: component.get('fish-species').get('saltwaterSpecies') });
      }
    }));
    component.set('placesConfig', this.get('typeahead-config').get('placesConfig'));
    newEntry.set('species', this.get('speciesOptions.firstObject'));
    newEntry.set('weightUnits', this.get('unitLabels.firstObject.weightUnits'));
    newEntry.set('lengthUnits', this.get('unitLabels.firstObject.lengthUnits'));

    // var lat, long, formattedAddress, google, geocoder;
    // this.get('geolocation').getLocation().then(function(geoObject) {
    //   lat = geoObject.coords.latitude;
    //   long = geoObject.coords.longitude;
    //   component.set('lat', lat);
    //   component.set('long', long);
    //   let google = component.get('google').maps;
    //   geocoder = new google.Geocoder();
    //   geocoder.geocode({location:{lat: lat, lng: long}},function(resultArray, status){
    //     if(resultArray.length > 0){
    //       component.set('address', resultArray[0].formatted_address);
    //     }
    //   });
  },

  focusOutCallback() {
    console.log('focus out callback');
  },
  placeChangedCallback() {
    console.log('place changed callback');
  },
  actions: {
    waterSelected(waterType) {
      set(this.get('newEntry'), 'location.water', waterType);
    },
    fishTypeSelected(fishType) {
      set(this.get('newEntry'), 'species', fishType);
    },
    weightUnitSelected(weightUnit) {
      set(this.get('newEntry'), 'weightUnits', this.get('metric-imperial-fixtures')
        .get('data')
        .filterBy('value', weightUnit)
        .get('firstObject.weightUnits'));
    },
    lengthUnitSelected(lengthUnit) {
      set(this.get('newEntry'), 'lengthUnits', this.get('metric-imperial-fixtures')
        .get('data')
        .filterBy('value', lengthUnit)
        .get('firstObject.lengthUnits'));
    },
    weatherTypeSelected(conditions) {
      set(this.get('newEntry'), 'conditions', conditions);
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
      let newEntry = this.get('newEntry');
      newEntry.set('weight', this.get('compositeWeight'));
      newEntry.set('length', this.get('compositeLength'));

      console.log('NEW Entry >>>');
      console.log(`caught? ${newEntry.get('caught')}`);
      console.log(`water? ${newEntry.get('location.water')}`);
      console.log(`country? ${newEntry.get('location.country')}`);
      console.log(`fish? ${newEntry.get('species')}`);
      console.log(`weight? ${newEntry.get('weight')},
        ${newEntry.get('weightUnits.0.text')} ${newEntry.get('weightUnits.1.text')}`);
      console.log(`weight? ${newEntry.get('length')},
        ${newEntry.get('lengthUnits.0.text')} ${newEntry.get('lengthUnits.1.text')}`);
      console.log(`Searched place tags? ${newEntry.get('location.names')}`);
      console.log(`Conditions? ${newEntry.get('conditions')}`);
      console.log(`Tackle? ${newEntry.get('tackle')}`);
      console.log(`Bait? ${newEntry.get('bait')}`);

      // newEntry.save();
    },
    done() {
      debugger;
    },
    enterClicked(event) {
      console.log('enterClicked handler');
      debugger;
    }
  }
});
