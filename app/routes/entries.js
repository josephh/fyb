// app/routes/entries.js
import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    },
    offset: {
      refreshModel: true
    },
    locationName: {
      refreshModel: true
    },
    fish: {
      refreshModel: true
    }
  },
  model(params) {
    return this.store.query('entry', params);
  }
});
