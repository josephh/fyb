import Ember from 'ember';
import { request } from 'ic-ajax';

const { get, set, RSVP, isNone, A } = Ember;
// TODO this constant should probably live somewhere more general like environment.js
const logo = Ember.Object.create({
  path: 'images/logo.svg'
});

export default Ember.Route.extend({
  model(params) {
    let e = this.store.peekRecord('entry', params.entryId);
    return e;
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
      let entry = this.currentModel, store = this.store;

      file.read().then((url) => {
        return this.loadPhoto(url);
      });

      request('http://localhost:4500/s3-signed-url', {
        data: {
          'file-name': get(file, 'name'),
          'file-type': get(file, 'type')
        }
      })
      .then((s3Direct) => {
        return file.upload(s3Direct.url, {
          data: s3Direct.credentials
        });
      }).then(function (result) {
        if(isNone(entry.get('images'))) {
          set(entry, 'images', A[result.headers.Location]);
        } else {
          debugger;
          let images = get(entry, 'images'), e = images.findBy('path', logo.path);
          if (e) {
            images.removeObject(e);
          };
          images.pushObject(Ember.Object.create({ path:  result.headers.Location }));
        }
        entry.save();
      });

    }
  }

});
