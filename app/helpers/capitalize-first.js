import Ember from 'ember';

export function capitalizeFirst(params/*, hash*/) {
  return params[0].capitalize();
}

export default Ember.Helper.helper(capitalizeFirst);
