import Ember from 'ember';

export default DS.Model.extend({
  entryDateTime: DS.attr('date'),
  ownerId: DS.attr('number', { defaultValue: 0 }),
  entryID: DS.attr('number', { defaultValue: 0 }),
  contextDateTime: DS.attr('date'),
  position: MF.fragment('position'),
  location: MF.fragment('location'),
  conditions: DS.attr('string', { defaultValue: 'sunny' }),
  tackle: DS.attr('string'),
  notes: DS.attr('string'),
  images: DS.hasMany('image', { async: true }),
  catch: MF.fragment('catch')
});
