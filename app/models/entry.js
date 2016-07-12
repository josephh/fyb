import DS from 'ember-data';
import MF from 'model-fragments';

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
  image: DS.attr('string'),
    location: MF.fragment('location'),
  user: DS.attr()
});
