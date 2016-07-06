import Ember from 'ember';

export default Ember.Service.extend({

  init() {
    this._super(...arguments);
    this.set('freshwaterSpecies', Ember.A([
      "Uknown", "Alewife", "Alligator Gar", "American Eel", "American Salmon", "American Shad", "Apache Trout", "Arctic Char", "Atlantic Salmon", "Atlantic Sturgeon", "Blue Catfish", "Bluegill", "Bowfin", "Brook Trout", "Brown Bullhead", "Brown Trout", "Bullhead Catfish", "Burbot", "Calico Bass(Black Crappie)", "Calico Bass(White Crappie)", "Catfish", "Chain Pickerel", "Channel Catfish", "Common Carp", "Creek Chubsucker", "Dolly Varden", "Fallfish", "Flathead Catfish", "Freshwater Drum", "Golden Shiner", "Grayling", "Green Sunfish", "Guadalupe Bass", "King Salmon", "Kokanee", "Lake Chub", "Lake Sturgeon", "Lake Trout", "Largemouth Bass", "Leather Carp", "Longnose Sucker", "Mirror Carp", "Muskellunge", "Northern Pike", "Pumpkinseed", "Rainbow Smelt", "Rainbow Trout", "Redfin Pickerel", "Rio Grande Perch", "Rock Bass", "Salmon", "Shortnose Sturgeon", "Smallmouth Bass", "Splake", "Spotted Bass", "Spotted Seatrout", "Steelhead", "Striped Bass Hybrid", "Sucker", "Sunfish", "Tiger Muskellunge", "Tiger Trout", "Trout", "Walleye", "White Bass", "White Catfish", "White Perch", "White Sucker", "Yellow Bullhead", "Yellow Perch"
    ]));
    this.set('saltwaterSpecies', Ember.A([
      "Uknown", "Albacore", "Alewife", "Amberjack", "American Eel", "American Shad", "Arctic Char", "Atlantic Bonito", "Atlantic Cod", "Atlantic Mackerel", "Atlantic Salmon", "Atlantic Sturgeon", "Black Drum", "Black Sea Bass", "Blackfish", "Blue Marlin", "Blue Shark", "Bluefin Tuna", "Bluefish", "Bonefish", "Bull Shark", "Catfish", "Cunner", "Cusk", "Dogshark", "Dolly Varden", "Dolphin Fish", "Great White Shark", "Grouper", "Haddock", "Hake", "Halibut", "Hickory Shad", "King Mackerel", "Little Tunny", "Lobster", "Mako Shark", "Monkfish", "Oyster Toadfish", "Pollock", "Pompano", "Red Drum", "Red Snapper", "Sailfish", "Salmon", "Sand Trout", "Sandbar (Brown) Shark", "Scup (Porgy)", "Sheepshead", "Shortnose Sturgeon", "Snook", "Spanish Mackerel", "Spot", "Spotted Seatrout", "Striped Bass", "Summer Flounder (Fluke)", "Swordfish", "Tarpon", "Thresher Shark", "Tommy Cod", "Turbot", "Walu", "Weakfish", "White Marlin", "Winter Flounder", "Winter Skate", "Yellowfin Tuna"
    ]));
    this.set('knownFreshwaterSpecies', Ember.A([
      "Apache Trout", "Bluegill", "Bowfin", "Bullhead Catfish", "Calico Bass(Black Crappie)", "Calico Bass(White Crappie)", "Catfish", "Salmon", "Shortnose Sturgeon", "Smallmouth Bass", "Splake", "Spotted Bass", "Spotted Seatrout", "Steelhead"
    ]));
    this.set('knownSaltwaterSpecies', Ember.A([
      "Catfish", "Great White Shark", "Grouper", "Haddock", "Hake", "Halibut", "Yellowfin Tuna"
    ]));
  }

});
