import Ember from 'ember';

export default Ember.Service.extend({
  init() {
    this._super(...arguments);
    this.set('placeTagsConfig', {
      "#": {
        type: 'list',
        defaultHint: `a place name like '#key west'`,
        sectionTitle: 'Places',
        content: [
          {value: 'shepperton-marina', label: 'Shepperton Marina' },
          {value: 'key-west', label: 'Key West' },
          {value: 'lord\'s-walk', label: 'Lord\'s Walk' },
        ]
      }
      // ,
      //
      // "before:": {
      //   type: 'date',
      //   defaultHint: 'a date',
      // },
      //
      // "after:": {
      //   type: 'date',
      //   defaultHint: 'a date',
      // },
      //
      // "channel:": {
      //   type: 'list',
      //   defaultHint: 'type',
      //   sectionTitle: 'Action Types',
      //   content: [
      //     {value: 'ember', label: 'ember'},
      //     {value: 'jobs', label: 'jobs'},
      //     {value: 'general', label: 'general'},
      //     {value: 'news', label: 'news'}
      //   ]
      // }
    });
  }
});
