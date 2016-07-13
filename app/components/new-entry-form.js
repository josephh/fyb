// app/components/new-entry.js
import Ember from 'ember';

  const { set, inject, computed } = Ember;

export default Ember.Component.extend({
  // TODO set these services via DI(?)
  store: inject.service(),
  'fish-species': inject.service(),
  'metric-imperial-fixtures': inject.service(),
  'typeahead-config': inject.service(),
  water: inject.service(),
  compositeWeight: computed('weightMajor', 'weightMinor', function() {
    return Number(this.get('weightMajor') + '.' + this.get('weightMinor'));
  }),
  compositeLength: computed('lengthMajor', 'lengthMinor', 'lengthUnit', function() {
    return Number(this.get('lengthMajor') + '.' + this.get('lengthMinor'));
  }),
  init() {
    let component = this,
      newEntry = component.get('store').createRecord('entry', {id: uuid()});
    // don't forget to make 'newEntry' available as a property of the controller!
    component.set('newEntry', newEntry);
    newEntry.set('location', component.get('store').createFragment('location',
      {water: component.get('water').get('waterOptions.firstObject.value'), names: ''}
    ));
    component._super(...arguments);
    component.set('waterOptions', component.get('water').get('waterOptions'));
    component.set('unitLabels', component.get('metric-imperial-fixtures').get('data'));
    component.set('speciesOptions', computed('newEntry.{location.water}', function() {
      if ( component.get('newEntry.location.water') === 'river' ||
        component.get('newEntry.location.water') === 'stillwater' ) {
        return Ember.ArrayProxy.create({ content: component.get('fish-species').get('freshwaterSpecies') });
      } else {
        return Ember.ArrayProxy.create({ content: component.get('fish-species').get('saltwaterSpecies') });
      }
    }));
    component.set('placeTagsConfig', component.get('typeahead-config').get('placeTagsConfig'));

    newEntry.set('species', component.get('speciesOptions.firstObject'));
    newEntry.set('weightUnits', component.get('unitLabels.firstObject.weightUnits'));
    newEntry.set('lengthUnits', component.get('unitLabels.firstObject.lengthUnits'));

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
    placeChanged() {
      console.log('place changed callback');
    },
    addEntry() {
      let newEntry = this.get('newEntry');
      newEntry.set('weight', this.get('compositeWeight'));
      newEntry.set('length', this.get('compositeLength'));

      console.log('NEW Entry >>>');
      // this can be written newEntry.getProperties...
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
      console.log('done called (places auto complete)');
    },
    enterClicked(event) {
      console.log('enterClicked handler');
      debugger;
    }
  }
});
