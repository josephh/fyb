import DS from 'ember-data';
import MF from 'model-fragments';

export default MF.Fragment.extend({
  country: DS.attr('string', { default: 'UK' }),
  waterbody: DS.attr('string', { default: 'river' }),
  name: DS.attr('string'),
  geoposition: MF.fragment('geoposition')
});
