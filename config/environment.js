 /* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'fyb',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    authenticationHost: 'http://localhost:4500',
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

    contentSecurityPolicyHeader: 'Content-Security-Policy',
    // Set or update content security policies
    contentSecurityPolicy: {

      'default-src': ["'none'"],

      'script-src':  ["'self'", "http://maps.googleapis.com"],

      'font-src': ["'self'", "fonts.gstatic.com"],

      'connect-src': ["'self'", "http://localhost:4500", "http://private-fc323-fyb1.apiary-mock.com"],

      'img-src':     [
        "'self'",
        "http://csi.gstatic.com/",
        "http://maps.gstatic.com/",
        "http://maps.googleapis.com/",
        "https://maps.gstatic.com/",
        "https://maps.googleapis.com/"],

      'style-src': ["'self'", "'unsafe-inline'", "fonts.googleapis.com"],

      'media-src': null

    },

    authorizationExchangeServerUrl: 'http://localhost:4500/exchange-authorization-code',

    torii: {
      sessionServiceName: 'toriiSession',
      providers: {
        'google-oauth2-bearer': {
          apiKey: '500707701090-h6ib4qve8b4rf445lpugjipn3bih9ere.apps.googleusercontent.com',
          redirectUri: 'http://localhost:4200'
        },
        'google-oauth2': {
          apiKey: '500707701090-h6ib4qve8b4rf445lpugjipn3bih9ere.apps.googleusercontent.com',
          redirectUri: 'http://localhost:4200',
          accessType: 'offline'
        },
        'facebook-oauth2': {
          apiKey: '829811140460593',
          redirectUri: 'http://localhost:4200',
          scope: 'public_profile' // optional
          /*
          Further facebook oauth optional properties include:
            state - An arbitrary unique string created by your app to guard
              against Cross-site Request Forgery.
            response_type - Determines whether the response data included when the
              redirect back to the app occurs is in URL parameters or fragments.
              See the Confirming Identity section to choose which type your app
              should use. This can be one of: code; token; code%20token.
            granted_scopes - Returns a comma-separated list of all Permissions
              granted to the app by the user at the time of login. Can be
              combined with other response_type values. When combined with
              token, response data is included as a URL fragment, otherwise
              included as a URL parameter.
            scope - A comma separated list of Permissions to request from the
              person using your app.
          */
        }
       // 'twitter-oauth1': {
       //   apiKey: 'ThiWyjSHHEGRfOj9ms8i5F2Xy',
       //   redirectUri: 'http://localhost:4200'
      //  }
      }
    },

    'g-map': {
      libraries: ['places'],
      key: process.env.FYB_GOOGLE_API_KEY,
      protocol: 'https'
    }

  };

  debugger;

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
