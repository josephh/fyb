// app/components/new-entry.js
import Ember from 'ember';

export default Ember.Component.extend({
  isFreshWater: true,
  specie: 'unknown',
  freshwaterSpecies: [
    "Alewife", "Alligator Gar", "American Eel", "American Salmon", "American Shad", "Apache Trout", "Arctic Char", "Atlantic Salmon", "Atlantic Sturgeon", "Blue Catfish", "Bluegill", "Bowfin", "Brook Trout", "Brown Bullhead", "Brown Trout", "Bullhead Catfish", "Burbot", "Calico Bass(Black Crappie)", "Calico Bass(White Crappie)", "Catfish", "Chain Pickerel", "Channel Catfish", "Common Carp", "Creek Chubsucker", "Dolly Varden", "Fallfish", "Flathead Catfish", "Freshwater Drum", "Golden Shiner", "Grayling", "Green Sunfish", "Guadalupe Bass", "King Salmon", "Kokanee", "Lake Chub", "Lake Sturgeon", "Lake Trout", "Largemouth Bass", "Leather Carp", "Longnose Sucker", "Mirror Carp", "Muskellunge", "Northern Pike", "Other (Freshwater)", "Pumpkinseed", "Rainbow Smelt", "Rainbow Trout", "Redfin Pickerel", "Rio Grande Perch", "Rock Bass", "Salmon", "Shortnose Sturgeon", "Smallmouth Bass", "Splake", "Spotted Bass", "Spotted Seatrout", "Steelhead", "Striped Bass Hybrid", "Sucker", "Sunfish", "Tiger Muskellunge", "Tiger Trout", "Trout", "Walleye", "White Bass", "White Catfish", "White Perch", "White Sucker", "Yellow Bullhead", "Yellow Perch"
  ],
  saltwaterSpecies: [
    "Albacore", "Alewife", "Amberjack", "American Eel", "American Shad", "Arctic Char", "Atlantic Bonito", "Atlantic Cod", "Atlantic Mackerel", "Atlantic Salmon", "Atlantic Sturgeon", "Black Drum", "Black Sea Bass", "Blackfish", "Blue Marlin", "Blue Shark", "Bluefin Tuna", "Bluefish", "Bonefish", "Bull Shark", "Catfish", "Cunner", "Cusk", "Dogshark", "Dolly Varden", "Dolphin Fish", "Great White Shark", "Grouper", "Haddock", "Hake", "Halibut", "Hickory Shad", "King Mackerel", "Little Tunny", "Lobster", "Mako Shark", "Monkfish", "Other (Saltwater)", "Oyster Toadfish", "Pollock", "Pompano", "Red Drum", "Red Snapper", "Sailfish", "Salmon", "Sand Trout", "Sandbar (Brown) Shark", "Scup (Porgy)", "Sheepshead", "Shortnose Sturgeon", "Snook", "Spanish Mackerel", "Spot", "Spotted Seatrout", "Striped Bass", "Summer Flounder (Fluke)", "Swordfish", "Tarpon", "Thresher Shark", "Tommy Cod", "Turbot", "Walu", "Weakfish", "White Marlin", "Winter Flounder", "Winter Skate", "Yellowfin Tuna"
  ],
  actions: {
    selectWaterBody(waterBody) {
      if(waterBody.toLowerCase() === 'river' || waterBody.toLowerCase() === 'freshwater') {
        this.set('isFreshWater', true)
      } else {
        this.set('isFreshWater', false)
      }
    },
    selectSpecies(specie) {
      this.set('specie', specie)
    }
  }
});
