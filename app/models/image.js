import DS from 'ember-data';

export default DS.Model.extend({
  entry: DS.belongsTo('catch', { async: true })
});
