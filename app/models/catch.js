import DS from 'ember-data';
import MF from 'model-fragments';

export default MF.Fragment.extend({
  owner: DS.attr('number'),
  entry: DS.attr('number'),
  catchURL: DS.attr('string'),

});
