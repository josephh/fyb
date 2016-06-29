import Ember from 'ember';

export function eq(params/*, hash*/) {
  params[0] === params[1];
}

export default Ember.Helper.helper(eq);
