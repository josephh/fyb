import DS from 'ember-data';
import MF from 'model-fragments';

const logoPath = Ember.Object.create({
  path: 'images/logo.svg'
});

export default DS.Model.extend({
  caught: DS.attr('date'),
  created: DS.attr('date'),
  conditions: DS.attr('string'),
  tackle: DS.attr('string'),
  bait: DS.attr('string'),
  notes: DS.attr('string'),
  species: DS.attr('string', { defaultValue: 'unknown' }),
  length: DS.attr('number', { defaultValue: 0.0 }),
  lengthUnits: DS.attr('string'),
  weight: DS.attr('number', { defaultValue: 0.0 }),
  weightUnits: DS.attr('string'),
  images: DS.attr( { defaultValue: Ember.A([logoPath]) }),
  location: MF.fragment('location'),
  user: DS.attr()
});
