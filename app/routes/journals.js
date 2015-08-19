import Ember from 'ember';

var Journal = Ember.Object.extend({
  year: new Date(2015, 1, 1)
});

var years = [];
for(var i=2012; i<2051; i++){
  console.log('next i :' + i);
  years.push(Journal.create({year: new Date(i, 1, 1)}));
};

export default Ember.Route.extend({ model: function() {
  return years;
}
});
