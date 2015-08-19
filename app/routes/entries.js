import Ember from 'ember';

var weather = ['sunny', 'overcast', 'rainy'];

var entries = Ember.ArrayProxy.extend(Ember.SortableMixin, {
  sortProperties: ['date'],
  sortAscending: false,
  content: []
}).create();

var Entry = Ember.Object.extend({
  date: '',
  location : {
     name: '',
     lat: '',
     long: '',
     postcode: ''
   },
   fishes: []
});

var Fish = Ember.Object.extend({
  species:'',
  length:0,
  weight:0,
  tackle:'',
  conditions:''
});

var f1 = Fish.create({
  species: 'trout',
  length: 20,
  weight: 3.5,
  tackle: '#4 12 klinkhammer',
  conditions: weather[0]
});
var f2 = Fish.create({
  species: 'grayling',
  length: 18,
  weight: 1.25,
  tackle: '#4 12 klinkhammer',
  conditions: weather[1]
});
var f3 = Fish.create({
  species: 'trout',
  length: 18,
  weight: 2,
  tackle: '#4 12 grey wulf',
  conditions: weather[2]
});
var f4 = Fish.create({
  species: 'dace',
  length: 5,
  weight: 0.5,
  tackle: '#3 breadcrust',
  conditions: weather[0]
});
var f5 = Fish.create({
  species: 'chub',
  length: 30,
  weight: 8,
  tackle: 'spinner red worm',
  conditions: weather[0]
});
var f6 = Fish.create({
  species: 'pike',
  length: 22,
  weight: 4,
  tackle: 'tele maggots',
  conditions: weather[1]
});

var entry1 = Entry.create({
  date: new Date(2015, 4, 21, 10, 30, 0, 0),
  location: {
     name: 'west amesbury',
     lat: '40.712784',
     long: '-74.005941',
     postcode: 'sp47bq'
   },
   fishes: Ember.ArrayProxy.extend({
       content: []
     }).create()
});
entry1.fishes.pushObjects([f1, f2]);

var entry2 = Entry.create({
  date: new Date(2015, 5, 1, 12, 30, 0, 0),
  location: {
     name: 'west amesbury',
     lat: '40.712784',
     long: '-74.005941',
     postcode: 'sp47bq'
   },
   fishes: Ember.ArrayProxy.extend( {
       content: []
     }).create()
});
entry2.fishes.pushObjects([f3, f4]);

var entry3 = Entry.create({
  date: new Date(2015, 6, 11, 8, 25, 0, 0),
  location: {
     name: 'west amesbury',
     lat: '40.712784',
     long: '-74.005941',
     postcode: 'sp47bq'
   },
   fishes: Ember.ArrayProxy.extend({
       content: []
     }).create()
});
entry3.fishes.pushObjects([f5, f6]);

entries.pushObjects([entry1, entry2, entry3]);

export default Ember.Route.extend({
  model : function(){
    return entries;
  }
});
