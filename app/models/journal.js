import DS from 'ember-data';

var Journal = DS.Model.extend({
  id: DS.attr('string'),
  date: DS.attr('date'),
  slug: function() {
    var s = this.date.getFullYear() + '-' + this.get('id');
    return s;
  }.property('id'),
  setupEntries: function(){
    if(!this.get('entries')){
      this.set('entries',[]);
    }
  }.on('init')
});
