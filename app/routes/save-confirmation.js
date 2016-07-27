import Ember from 'ember';
import { request } from 'ic-ajax';

const { get, set, RSVP } = Ember;

export default Ember.Route.extend({
  model(params) {
    let e = this.store.findRecord('entry', params.entryId),
     i = this.store.findAll('image');
    return {
      entry: e,
      images: i
    };
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
      debugger;
      let entryId = this.currentModel.entry.get('id');

      var image = this.store.createRecord('image', {
        name: get(file, 'name'),
        uploadedAt: new Date()
      });

      file.read().then((url) => {
        return this.loadPhoto(url);
      }).then(function (img) {
        set(image, 'width', img.width);
        set(image, 'height', img.height);
      });

      debugger;

      request('http://localhost:4500/s3-signed-url', {
        data: {
          key : entryId
        }
      })
      .then(function (s3Direct) {
        return file.upload(s3Direct.signedUrl);
      }).then(function (result) {
        set(image, 'url', result.headers.Location);
        image.save();
      });
    }
  }

});
