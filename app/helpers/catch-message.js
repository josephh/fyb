import Ember from 'ember';

export function catchMessage(params/*, hash*/) {
  debugger;
  var fish = 'unknown',
    fish = params[0].species,
    userName = params[0].user.name,
    weight = params[0].weight,
    weightUnits = params[0].weightUnits,
    length = params[0].length,
    lengthUnits = params[0].lengthUnits,
    location = params[0].location,
    message = '';
  if(fish) { // fish is mandatory in the data model - perhaps not a redundant condition
    if(fish == 'unknown') {
      return "We don't know what sort of fish this is";
    }
    if(userName) {
      message.concat(`${userName} caught this ${fish} `);
    }
    if(location && location.country){ // country is required in the data model as well...
      message.concat(`in ${location.country}, `);
    }
    if(weight) {  // default weight units is ounces
      message.concat(`weighing ${weight} ${weightUnits} and `);
    }
    if(length) {  // default is cm
      message.concat(`${length} ${lengthUnits} long.`);
    }
  }
  return message;
}

export default Ember.Helper.helper(catchMessage);
