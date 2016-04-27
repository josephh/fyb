import DS from 'ember-data';
import MF from 'model-fragments';

export default DS.Model.extend({
  caught: DS.attr('date'),
  created: DS.attr('date'),
  owner: DS.attr('number'),
  location: MF.fragment('location'),
  conditions: DS.attr('string'),
  tackle: DS.attr('string'),
  notes: DS.attr('string'),
  species: DS.attr('string', { defaultValue: 'unknown' }),
  lengthunit: DS.attr('string', { defaultValue: 'cm' }),
  length: DS.attr('number', { defaultValue: 0 }),
  weightunit: DS.attr('string', { defaultValue: 'ounces' }),
  weight: DS.attr('number', { defaultValue: 0 }),
  images: DS.hasMany('image', { async: true })
});
