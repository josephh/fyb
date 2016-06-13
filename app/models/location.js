import DS from 'ember-data';
import MF from 'model-fragments';

export default MF.Fragment.extend({
  country: DS.attr('string', { default: 'UK' }),
  water: DS.attr('string', { default: 'river' }),
  name: DS.attr('string'),
  position: MF.fragment('geoposition')
});
