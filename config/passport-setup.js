const passport = require('passport');
const keys = require('./keys');
const User = require('../models/user-model');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID      : keys.google.clientID,
        clientSecret  : keys.google.clientSecret,
        callbackURL   : keys.google.callbackURL
    }, (accessToken, refreshToken, profile, done) => {
           // check if user already exists in our own db
            User.findOne({ 'google.id': profile.id}).then((currentUser) => {
               if (currentUser) {
                  // already have this user
                  console.log('user is: ', currentUser);
                  done(null, currentUser);
              } else {
                 // if not, create user in our db
                var newUser = new User();
                // create new user with these prerequisites
                newUser.google.id         = profile.id;
                newUser.google.username   = profile.displayName;
                newUser.google.email      = profile.emails[0].value; 
                newUser.google.thumbnail  = profile._json.image.url;
                newUser.save().then((newUser) => {
                     console.log('created new user: ', newUser);
                     done(null, newUser);
                });
            }
        });
    })
);

passport.use(
    new FacebookStrategy({

    // pull in our app id and secret from our auth.js file
    clientID      : keys.facebook.clientID,
    clientSecret  : keys.facebook.clientSecret,
    callbackURL   : keys.facebook.callbackURL
},

// facebook will send back the token and profile
(token, refreshToken, profile, done) => {

    // asynchronous
    process.nextTick(() => {

        // find the user in the database based on their facebook id
        User.findOne({ 'facebook.id' : profile.id }, (err, user) => {

            // if there is an error, stop everything and return that
            // ie an error connecting to the database
            if (err)
                return done(err);

            // if the user is found, then log them in
            if (user) {
                return done(null, user); // user found, return that user
            } else {
                // if there is no user found with that facebook id, create them
                var newUser = new User();
                // set all of the facebook information in our user model
                newUser.facebook.id         = profile.id; // set the users facebook id                   
                newUser.facebook.token      = token; // we will save the token that facebook provides to the user                    
                newUser.facebook.name       = profile.name.givenName + ' ' + profile.name.familyName; // look at the passport user profile to see how names are returned
                newUser.facebook.email      = profile.emails[0].value; // facebook can return multiple emails so we'll take the first
                newUser.facebook.thumbnail  = profile._json.image.url; // 

                // save our user to the database
                newUser.save((err) => {
                    if (err)
                        throw err;

                    // if successful, return the new user
                    console.log('created new user: ', newUser);
                    return done(null, newUser);
                });
            }
        });
    });
}));