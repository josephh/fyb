import Ember from 'ember';

var users = Ember.Object.extend({
  // auth providers probably merit their own controller/model
   loginProviders: Ember.ArrayProxy.extend({content: []}).create(),
   createProviders: Ember.ArrayProxy.extend({content: []}).create()
}).create();

users.loginProviders.pushObjects([
  Ember.Object.extend({
    name: 'google'
  }),
  Ember.Object.extend({
    name: 'facebook'
  })
]);

users.createProviders.pushObjects([
  Ember.Object.extend({
    name: 'google'
  }),
  Ember.Object.extend({
    name: 'facebook'
  })
]);

export default Ember.Controller.extend({
  users: users
});
