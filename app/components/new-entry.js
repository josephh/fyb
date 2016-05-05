// app/components/new-entry.js
import Ember from 'ember';

const metricLength = 'cm',
 imperialLength = 'feet and inches',
 metricWeight = 'grams',
 imperialWeight = 'pounds and ounces';

var freshwaterSpecies = Ember.A([
  "Alewife", "Alligator Gar", "American Eel", "American Salmon", "American Shad", "Apache Trout", "Arctic Char", "Atlantic Salmon", "Atlantic Sturgeon", "Blue Catfish", "Bluegill", "Bowfin", "Brook Trout", "Brown Bullhead", "Brown Trout", "Bullhead Catfish", "Burbot", "Calico Bass(Black Crappie)", "Calico Bass(White Crappie)", "Catfish", "Chain Pickerel", "Channel Catfish", "Common Carp", "Creek Chubsucker", "Dolly Varden", "Fallfish", "Flathead Catfish", "Freshwater Drum", "Golden Shiner", "Grayling", "Green Sunfish", "Guadalupe Bass", "King Salmon", "Kokanee", "Lake Chub", "Lake Sturgeon", "Lake Trout", "Largemouth Bass", "Leather Carp", "Longnose Sucker", "Mirror Carp", "Muskellunge", "Northern Pike", "Other", "Pumpkinseed", "Rainbow Smelt", "Rainbow Trout", "Redfin Pickerel", "Rio Grande Perch", "Rock Bass", "Salmon", "Shortnose Sturgeon", "Smallmouth Bass", "Splake", "Spotted Bass", "Spotted Seatrout", "Steelhead", "Striped Bass Hybrid", "Sucker", "Sunfish", "Tiger Muskellunge", "Tiger Trout", "Trout", "Walleye", "White Bass", "White Catfish", "White Perch", "White Sucker", "Yellow Bullhead", "Yellow Perch"
]),
  saltwaterSpecies = Ember.A([
  "Albacore", "Alewife", "Amberjack", "American Eel", "American Shad", "Arctic Char", "Atlantic Bonito", "Atlantic Cod", "Atlantic Mackerel", "Atlantic Salmon", "Atlantic Sturgeon", "Black Drum", "Black Sea Bass", "Blackfish", "Blue Marlin", "Blue Shark", "Bluefin Tuna", "Bluefish", "Bonefish", "Bull Shark", "Catfish", "Cunner", "Cusk", "Dogshark", "Dolly Varden", "Dolphin Fish", "Great White Shark", "Grouper", "Haddock", "Hake", "Halibut", "Hickory Shad", "King Mackerel", "Little Tunny", "Lobster", "Mako Shark", "Monkfish", "Other", "Oyster Toadfish", "Pollock", "Pompano", "Red Drum", "Red Snapper", "Sailfish", "Salmon", "Sand Trout", "Sandbar (Brown) Shark", "Scup (Porgy)", "Sheepshead", "Shortnose Sturgeon", "Snook", "Spanish Mackerel", "Spot", "Spotted Seatrout", "Striped Bass", "Summer Flounder (Fluke)", "Swordfish", "Tarpon", "Thresher Shark", "Tommy Cod", "Turbot", "Walu", "Weakfish", "White Marlin", "Winter Flounder", "Winter Skate", "Yellowfin Tuna"
]),
  lengthUnitLabels = Ember.A([imperialLength, metricLength]),
  weightUnitLabels = Ember.A([imperialWeight, metricWeight]);

export default Ember.Component.extend({
  water: 'river', // stillwater or sea
  specie: 'Other',
  speciesOptions: Ember.computed('water', function() {
    if ( this.get('water') === 'river' || this.get('water') === 'stillwater' ) {
      return Ember.ArrayProxy.create({ content: freshwaterSpecies });
    } else {
      return Ember.ArrayProxy.create({ content: saltwaterSpecies });
    }
  }),
  weightUnit: weightUnitLabels[0],
  weightUnits: weightUnitLabels,
  weightMajor: 0,
  weightMinor: 0,
  isMetricWeight: Ember.computed('weightUnit', function() {
    if(this.get('weightUnit') === metricWeight) {
      return true;
    } else {
      return false;
    }
  }),
  compositeWeight: Ember.computed('weightMajor', 'weightMinor', 'weightUnit', function() {
    if(this.get('weightUnit') === metricWeight) {
      return this.get('weightMajor');
    } else {
      return this.get('weightMajor') + ',' + this.get('weightMinor');
    }
  }),
  lengthUnit: lengthUnitLabels[0],
  lengthUnits: lengthUnitLabels,
  lengthMajor: 0,
  lengthMinor: 0,
  isMetricLength: Ember.computed('lengthUnit', function() {
    if(this.get('lengthUnit') === metricLength) {
      return true;
    } else {
      return false;
    }
  }),
  compositeLength: Ember.computed('lengthMajor', 'lengthMinor', 'lengthUnit', function() {
    if(this.get('lengthUnit') === metricLength) {
      return this.get('lengthMajor');
    } else {
      return this.get('lengthMajor') + ',' + this.get('lengthMinor');
    }
  }),
  actions: {
    selectWaterBody(water) {
      this.set('water', water);
      console.log(this.get('water'));
    },
    addEntry() {
      console.log('entry clicked');
      debugger;
    }
  }
});
