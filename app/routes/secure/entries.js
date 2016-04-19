// /app/routes/secure/entries.js
import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query('entry');
  }
});
