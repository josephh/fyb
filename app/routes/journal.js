import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var journals = this.modelFor('journals');
    return journals.findBy('slug', params.slug);
  }
});
