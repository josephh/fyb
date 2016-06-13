import DS from 'ember-data';
import MF from 'model-fragments';

export default MF.Fragment.extend({
  latitude: DS.attr('number', {default: 0}),
  longitude: DS.attr('number', {default: 0})
});
