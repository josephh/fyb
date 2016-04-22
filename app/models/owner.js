import Model from 'ember-data/model';

export default Model.extend({
  ownerId: DS.attr('string');
});
