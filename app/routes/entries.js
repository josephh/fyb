import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    debugger;
    return {
      data: {
        name: 'new'
      }
    };
  }
});
