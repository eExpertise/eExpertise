// this file should be in .gitignore, if not, then please feel free to hack me

module.exports = {
    google: {
        clientID      : '820416719272-n6fcts7gviv6d2c7jgj4o5d1dsclguhm.apps.googleusercontent.com', // App ID
        clientSecret  : 'fVHSx6LI3krG7h62b3CAzWo6', // App Secret
        callbackURL   : 'http://localhost:8080/auth/google/callback' // App callback
    },
    facebookAuth : {
        clientID      : 'your-secret-clientID-here', // App ID
        clientSecret  : 'your-client-secret-here', // App Secret
        callbackURL   : 'http://localhost:8080/auth/facebook/callback' // App callback
    },

    twitterAuth : {
        clientKey       : 'your-consumer-key-here', // App ID
        clientSecret    : 'your-client-secret-here', // App Secret
        callbackURL     : 'http://localhost:8080/auth/twitter/callback' // App callback
    },
    mongodb: {
        dbURI  : 'mongodb://filiboii:test@ds155218.mlab.com:55218/eexpertise-test'
    },
    session: {
        cookieKey  : 'theilluminatiiswatchingus'
    }
};