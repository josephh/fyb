import Ember from 'ember';

/**
 * the parameter to this helper is the model - itself an Ember object
 */
export function catchMessage(params/*, hash*/) {
  var fish = params[0].get('species'),
    userName = params[0].get('user.name'),
    weight = params[0].get('weight'),
    weightUnits = params[0].get('weightUnits'),
    length = params[0].get('length'),
    lengthUnits = params[0].get('lengthUnits'),
    country = params[0].get('location.country'),
    message = '';
  if(fish) { // fish is mandatory in the data model - perhaps not a redundant condition
    if(fish == 'unknown') {
      return "We don't know what sort of fish this is";
    }
    if(userName) {
      message = message.concat(`${userName} caught this ${fish} `);
    }
    if(country){ // country is required in the data model as well...
      message = message.concat(`in ${country}, `);
    }
    if(weight) {  // default weight units is ounces
      message = message.concat(`weighing ${weight} ${weightUnits} and `);
    }
    if(length) {  // default is cm
      message = message.concat(`${length} ${lengthUnits} long.`);
    }
  }
  return message;
}

export default Ember.Helper.helper(catchMessage);
