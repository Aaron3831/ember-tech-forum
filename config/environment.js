/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'tech-forum',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },
    apiKey: "AIzaSyArPTnYwjRvMVZ7-dpGrmRnGbF_1S0aT28",
      authDomain: "ember-forum-8e03c.firebaseapp.com",
      databaseURL: "https://ember-forum-8e03c.firebaseio.com",
      projectId: "ember-forum-8e03c",
      storageBucket: "ember-forum-8e03c.appspot.com",
      messagingSenderId: "525377622489"
      };
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
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
