import DS from 'ember-data';
import MF from 'model-fragments';

export default MF.Fragment.extend({
  ownerId: DS.attr('number', { default: 0 }),
  entryId: DS.attr('number', { default: 0 }),
  catchId: DS.attr('number', { default: 0 }),
  catchURL: DS.attr('string'),
  species: DS.attr('string', { default: 'unknown' }),
  lengthUnit: DS.attr('string', { default: 'cm' }),
  length: DS.attr('number', { default: 0 }),
  weightUnit: DS.attr('string', { default: 'ounces' }),
  weight: DS.attr('number', { default: 0 }),
  name: DS.attr('string'),
  catchDateTime: DS.attr('date'),
  images: DS.hasMany('image', { async: true })
});
