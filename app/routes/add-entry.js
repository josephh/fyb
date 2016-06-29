// app/routes/add-entry.js
import Ember from 'ember';
import { request } from 'ic-ajax';

export default Ember.Route.extend({

  model() {
    let newEntry = this.store.createRecord('entry', {id: 1});
    return newEntry;
  },

  loadPhoto(url) {
    const {resolve, reject, promise} = RSVP.defer();
    const img = new Image();
    img.src = url;
    img.onload = () => { resolve(img); };
    img.onerror = reject;

    return promise;
  },

  actions: {
    waterSelected(waterType) {
      let model = this.get('model');
      Ember.set(model, 'location', {});
      Ember.set(model, 'location.water', waterType);
      console.log(`in waterselected (watertype = ${watertype})`);
    },
    uploadPhoto: function(file) {
      var image = this.store.createRecord('image', {
        name: get(file, 'name'),
        uploadedAt: new Date()
      });

      file.read().then((url) => {
        return this.loadPhoto(url);
      }).then(function(img) {
        set(image, 'width', img.width);
        set(image, 'height', img.height);
      });

      // request('/api/images/s3_direct', {
      //   data: {
      //     filename: get(file, 'name')
      //   }
      // }).then(function (s3Direct) {
      //   return file.upload(s3Direct.url, {
      //     data: s3Direct.credentials
      //   });
      // }).then(function (result) {
      //   set(image, 'url', result.headers.Location);
      //   image.save();
      // });
    },
    save() {
      console.log(`water body : ${this.get('water')}`);
      // console.log(`fish species: ${this.get('specie')}`);
      // console.log(`length: ${this.get('compositeLength')} ${this.get('lengthUnit')}`);
      // console.log(`weight: ${this.get('compositeWeight')} ${this.get('weightUnit')}`);
      // console.log(``);
      // console.log(``);
      // console.log(`conditions: ${this.get('conditions')}`);
      // console.log(`tackle: ${this.get('tackle')}`);
      // this.get('model').save();
      // console.log(`notes: ${this.get('notes')}`);
    }
  },

});
