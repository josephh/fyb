import Ember from 'ember';

export default Ember.Object.extend({
  id: '',
  date: '',
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
