import DS from 'ember-data';
import MF from 'model-fragments';

export default DS.Model.extend({
  entryDate: DS.attr('date'),
  owner: DS.attr('number', { defaultValue: 0 }),
  contextDateTime: DS.attr('date'),
  createdAt: DS.attr('date', {defaultValue() {return new Date();}}),
  position: MF.fragment('position'),
  location: MF.fragment('location'),
  conditions: DS.attr('string'),
  tackle: DS.attr('string'),
  notes: DS.attr('string'),
  species: DS.attr('string', { defaultValue: 'unknown' }),
  lengthUnit: DS.attr('string', { defaultValue: 'cm' }),
  length: DS.attr('number', { defaultValue: 0 }),
  weightUnit: DS.attr('string', { defaultValue: 'ounces' }),
  weight: DS.attr('number', { defaultValue: 0 }),
  catchDateTime: DS.attr('date'),
  images: DS.hasMany('image', { async: true })
});
