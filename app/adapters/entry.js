import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  buildURL (modelName, id, snapshot, requestType, query)  {
    let owner = query.owner;
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

    if (owner) {
     url.unshift(encodeURIComponent(owner));
     delete query.owner; // the owner parameter isn't intended to append to a GET request
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
