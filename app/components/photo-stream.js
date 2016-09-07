import Ember from 'ember';

const { get } = Ember;
const { sort, min, mapBy } = Ember.computed;

export default Ember.Component.extend({
  classNames: ['photo-stream']
  // commenting pending decisions around the 'image' model and preferred display
  /**
  attributeBindings: ['style'],
**/

// commenting pending decisions around the 'image' model and preferred display
  /**
  widths: mapBy('photos', 'width'),
  width: min('widths'),

  style: function () {
    return `max-width: ${get(this, 'width')}px`.htmlSafe();
  }.property('width')
  **/
});
