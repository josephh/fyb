import Ember from 'ember';

const { isPresent } = Ember;

export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */
  this.passthrough('http://localhost:9000/entries', ['get']);
  this.passthrough('http://localhost:4500/s3-signed-url', ['get']);
  this.passthrough('/api/images/s3_direct');
  this.passthrough('https://jobbings--fyb.s3.amazonaws.com/', ['post']);
  this.passthrough('https://jobbings--fyb.s3.amazonaws.com/**', ['post']);
  this.passthrough('https://s3-eu-west-1.amazonaws.com/**', ['post']);

  this.post('http://localhost:9000/entries', (schema, request) => {
    var params = JSON.parse(request.requestBody);

    if (params) {
      return schema.entries.create(params);
    };

  });


  this.patch('http://localhost:9000/entries/:id', (schema, request) => {
  var id = request.params.id;

  // TODO = something like...
 /* let entry = schema.entries.find(id);
  * const attrs = JSON.parse(request.requestBody).data;
  * return schema.entries.update(attrs);
  */

  });

  this.get('/images', function() {
    return {
      "data": [
        {
          "id": "1",
          "type": "image",
          "attributes": {
            "url": "/public/images/CloudpayMacmillan100K-6658.jpg",
            "name": "cloudpay macmillan",
            "uploadedAt": "2016-04-26T08:46:27Z",
            "width": "1224",
            "height": "816"
          }
        },
        {
          "id": "2",
          "type": "image",
          "attributes": {
            "url": "/public/images/Image-1.jpg",
            "name": "image 1",
            "uploadedAt": "2016-04-26T08:46:27Z",
            "width": "320",
            "height": "320"
          }
        },
        {
          "id": "3",
          "type": "image",
          "attributes": {
            "url": "/public/images/IMG_0495.jpeg",
            "name": "image 495",
            "uploadedAt": "2016-04-26T08:46:27Z",
            "width": "320",
            "height": "240"
          }
        },
        {
          "id": "4",
          "type": "image",
          "attributes": {
            "url": "/public/images/IMG_0571.JPG",
            "name": "image 571",
            "uploadedAt": "2016-04-26T08:46:27Z",
            "width": "640",
            "height": "480"
          }
        },
        {
          "id": "5",
          "type": "image",
          "attributes": {
            "url": "/public/images/IMG_20160525_015547.jpg",
            "name": "image 15547",
            "uploadedAt": "2016-04-26T08:46:27Z",
            "width": "240",
            "height": "320"
          }
        }
      ]
    };
  });






}
