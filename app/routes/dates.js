import Ember from 'ember';


var weather = ['sunny', 'overcast', 'rainy'];

var Fish = Ember.Object.extend({
  time:'',
  species:'',
  length:0,
  weight:0,
  tackle:'',
  conditions:''
});

var f1 = Fish.create({
  time: new Date(2015, 4, 21, 10, 30, 0, 0),
  species: 'trout',
  length: 20,
  weight: 3.5,
  tackle: '#4 12 klinkhammer',
  conditions: weather[0]
});
var f2 = Fish.create({
  time: new Date(2015, 4, 21, 10, 49, 0, 0),
  species: 'grayling',
  length: 18,
  weight: 1.25,
  tackle: '#4 12 klinkhammer',
  conditions: weather[1]
});
var f3 = Fish.create({
  time: new Date(2015, 4, 21, 12, 1, 0, 0),
  species: 'trout',
  length: 18,
  weight: 2,
  tackle: '#4 12 grey wulf',
  conditions: weather[2]
});

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

var entry = Entry.create({
  date: new Date(2015, 4, 21, 10, 30, 0, 0),
  location: {
     name: 'west amesbury',
     lat: '40.712784',
     long: '-74.005941',
     postcode: 'sp47bq'
   },
   fishes: Ember.ArrayProxy.extend(Ember.SortableMixin, {
       sortProperties: ['time'],
         sortAscending: true,
       content: []
     }).create()
});

entry.fishes.pushObjects([f1, f2, f3]);

export default Ember.Route.extend({
  model: function(){
    return entry;
  }
});
