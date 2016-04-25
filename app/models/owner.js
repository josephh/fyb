import Model from 'ember-data/model';
import DS from 'ember-data';

export default Model.extend({
  ownerId: DS.attr('string')
});
