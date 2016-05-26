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
  length: DS.attr('number', { defaultValue: 0 }),
  lengthunits: DS.attr('string', { defaultValue: 'cm' }),
  weight: DS.attr('number', { defaultValue: 0 }),
  weightunits: DS.attr('string', { defaultValue: 'ounces' }),
  images: DS.hasMany('image', { async: true }),
  user: DS.attr('string'),
  location: MF.fragment('location')
});
