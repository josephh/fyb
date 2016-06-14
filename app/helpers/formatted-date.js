import Ember from 'ember';
import Moment from 'moment';

export function formattedDate(params) {
  let d = params[1];
  if(d == 'short'){
    return Moment(params[0]).format('LL');
  }
  else {
    return 'not formatted!';
  }
}

export default Ember.Helper.helper(formattedDate);
