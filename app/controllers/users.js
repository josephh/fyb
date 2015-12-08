import Ember from 'ember';

var Users = Ember.Object.extend({
  // auth providers probably merit their own controller/model
   loginProviders: [],
   createProviders: []
 });

var providers = ['Google', 'Facebook'];

var users = Users.create({
  loginProviders: Ember.ArrayProxy.create( {content: Ember.A(providers)} ),
  createProviders: Ember.ArrayProxy.create( {content: Ember.A(providers)} )
});

export default Ember.Controller.extend({
  users: users
});
