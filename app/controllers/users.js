import Ember from 'ember';

var Users = Ember.Object.extend({
  // auth providers probably merit their own controller/model
   authProviders: []
 });

var providers = ['Google', 'Facebook'];

var users = Users.create({
  authProviders: Ember.ArrayProxy.create( {content: Ember.A(providers)} )
});

export default Ember.Controller.extend({
  users: users
});
