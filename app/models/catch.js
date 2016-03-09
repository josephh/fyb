import Ember from 'ember';

export default Ember.Object.extend({
  ownerId: 0,
  entryID: 0,
  catchId: 0,
  catchURL: '',
  catchDateTime: '',
  species: 'unknown',
  length: 0,
  lengthUnit: `cm`,
  weight: 0,
  weightUnit: `ounces`,
  images: Ember.ArrayProxy.extend(Ember.SortableMixin, { content: [] }).create()
 });
