 /* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'fyb',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    // google webfonts - included here (via an add-on) to avoid explicit entry in
    // cssmodule.exports = function(environment) {
    googleFonts: [
      'Montserrat:400,700'
    ],

    // Set or update content security policies
    contentSecurityPolicy: {
      'font-src': "'self' fonts.gstatic.com",
      'style-src': "'self' fonts.googleapis.com",
      'connect-src': "'self' http://localhost:4500",
    },

    'simple-auth-token': {
      serverTokenEndpoint: 'http://localhost:4500/get-token',
    },

    'simple-auth': {
      authorizer: 'simple-auth-authorizer:token'
    },

    torii: {
      providers: {
        'google-oauth2-bearer': {
          apiKey: '500707701090-h6ib4qve8b4rf445lpugjipn3bih9ere.apps.googleusercontent.com',
          redirectUri: 'http://localhost:4200',
        },
      }
    }

  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
