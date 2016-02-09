// app/adapters/application.js
import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

/*
* If the application uses Ember Data, you can authorize all of the requests it
* sends to the API by using the DataAdapterMixin
*/
export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:oauth2' 
});
