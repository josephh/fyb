import DS from 'ember-data';
import MF from 'model-fragments';

export default MF.Fragment.extend({
  country: DS.attr('string', { default: 'UK' }),
  water: DS.attr('string', { default: 'river' }),
  names: DS.attr(),
  position: MF.fragment('geoposition'),
  formattedAddress: DS.attr('string')
});
