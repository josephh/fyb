import Ember from 'ember';
import { request } from 'ic-ajax';

const { get, set, inject, computed, isPresent, RSVP } = Ember;

export default Ember.Route.extend({
  model(params) {
    let e = this.store.findRecord('entry', params.entryId),
     i = this.store.findAll('image');
    return {
      entry: e,
      images: i
    }
  },

  loadPhoto(url) {
    const { resolve, reject, promise } = RSVP.defer();
    const img = new Image();
    img.src = url;
    img.onload = () => { resolve(img); };
    img.onerror = reject;

    return promise;
  },

  actions: {
    uploadPhoto(file) {
      let entryId = this.get('model').id;

      var image = this.get('store').createRecord('image', {
        name: get(file, 'name'),
        uploadedAt: new Date()
      });

      debugger;

      file.read().then((url) => {
        return this.loadPhoto(url);
      }).then(function (img) {
        debugger;
        set(image, 'width', img.width);
        set(image, 'height', img.height);
      }).then(function() {
        return file.upload(`/entries/${entryId}/upload-image`);
      });

    }
  }

});
