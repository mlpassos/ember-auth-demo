/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-blog',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    firebase: {
      apiKey: "AIzaSyCDsdkUXLBxGAMGmNmTxIK1Vl8ANfGujz4",
      authDomain: "ember-secom-app.firebaseapp.com",
      databaseURL: "https://ember-secom-app.firebaseio.com",
      storageBucket: "ember-secom-app.appspot.com",
      messagingSenderId: "605443485040"  
    },
    torii: {  
      sessionServiceName: 'session',
      providers: {
        'google-oauth2': {
          apiKey:"605443485040-vlsktsl59tsla3latdgfb1q1jqm093sk.apps.googleusercontent.com",
          redirectUri: "https://ember-secom-app.firebaseapp.com/__/auth/handler"
          // redirectUri: "https://auth.firebase.com/v2/ember-secom-app/auth/google/callback",
        }
      }
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
    // ,
    // firebase: 'https://ember-secom-app.firebaseio.com/',  
    // torii: {  
    //   sessionServiceName: 'session'
    // }
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
