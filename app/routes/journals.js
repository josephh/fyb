import Ember from 'ember';
import Journal from '../models/journal';
import Entry from '../models/entry';

function logArrayElements(element, index) {
  console.log('a[' + index + '] = ' + element);
  if(typeof element === 'object'){
    console.log('entry\'s journal id ' + element.journalId);
  }
}

var weather = ['sunny', 'overcast', 'rainy'];

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
  id:1,
  journalId: 1,
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
  id: 2,
  journalId: 2,
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
  id: 3,
  journalId: 3,
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

var journals = Ember.ArrayProxy.extend(Ember.SortableMixin, {
  sortProperties: ['date'],
  sortAscending: true,
  content: []
}).create();

var j1 = Journal.create({date: new Date(2013, 1, 1), id: 1});
var j2 = Journal.create({date: new Date(2014, 1, 1), id: 2});
var j3 = Journal.create({date: new Date(2015, 1, 1), id: 3});

j1.get('entries').pushObject(entry1);
j2.get('entries').pushObject(entry2);
j3.get('entries').pushObject(entry3);

journals.pushObjects([j1, j2, j3]);

export default Ember.Route.extend({
  model: function() {
    return journals;
  }
});
