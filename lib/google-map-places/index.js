/*jshint node:true*/
'use strict';

module.exports = {
  name: 'google-map-places',

  isDevelopingAddon: function() {
    return true;
  },

  contentFor: function(type, config) {
    var content = '';
    if (type === 'body-footer') {
      var src = "//maps.googleapis.com/maps/api/js",
         key = config['google-map-places'].key;
      if (!key) {
        Ember.Logger.error('Missing google api key!');
      } else {
        key = 'key=' + encodeURIComponent(key);
        return `<script type="text/javascript"
          src="//maps.googleapis.com/maps/api/js?${key}&libraries=places"></script>`;
      }
    }
  },

  included: function(app, parentAddon) {
    var target = (parentAddon || app);
    target.options = target.options || {};
    target.options.babel = target.options.babel || { includePolyfill: true };
    return this._super.included(target);
  }

};
