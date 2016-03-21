import DS from 'ember-data';
import MF from 'model-fragments';

export default MF.Fragment.extend({
  lat: DS.attr('number', {default: 0}),
  long: DS.attr('number', {default: 0})
});
