// app/adapters/entry.js
import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  namespace: '',
  buildURL (modelName, id, snapshot, requestType, query)  {
    debugger;
    var url = [];
    var host = this.host;
    var prefix = this.urlPrefix();
    var path;

    if (modelName) {
     path = this.pathForType(modelName);
     if (path) {
       url.push(path);
     }
    }

    if (prefix) {
     url.unshift(prefix);
    }

    url = url.join('/');
    if (!host && url && url.charAt(0) !== '/') {
     url = '/' + url;
    }

    return url;

  }
});
