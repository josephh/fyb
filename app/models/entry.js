import Ember from 'ember';

export default Ember.Object.extend({
  entryDateTime: '',
  ownerId: 0,
  entryID: 0,
  contextDateTime: '',
  position: {
    lat: 0,
    long: 0
  },
  location:{
    country: '',
    waterBody: '',
    name: ''
  },
  conditions: '',
  tackle: '',
  notes: '',
  images: Ember.ArrayProxy.extend(Ember.SortableMixin, { content: [] }).create(),
  catch: Ember.ArrayProxy.extend(Ember.SortableMixin, { content: [] }).create()
});
