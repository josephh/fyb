// controllers/users
import Ember from 'ember';
var providers = ['Google', 'Facebook', 'Twitter'];

var users = Ember.Object.extend({
   authProviders: []
 }).create({
   authProviders: Ember.ArrayProxy.create( {content: Ember.A(providers)} )
 });

export default Ember.Controller.extend({
  users: users
});
