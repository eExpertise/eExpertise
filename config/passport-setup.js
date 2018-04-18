const passport = require('passport');
const keys = require('./keys');
const User = require('../models/user-model');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});


passport.use(new GoogleStrategy({
        // options for google strategy
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
        // check if user already exists in our own db
        User.findOne({googleId: profile.id}).then((currentUser) => {
            if (currentUser) {
                // already have this user
                console.log('user is: ', currentUser);
                done(null, currentUser);
            } else {
                // if not, create user in our db
                var newUser = new User() 
                // setting up user settings from google
                newUser.google.id        = profile.id;
                newUser.google.username  = profile.username;
                newUser.google.thumbnail = profile.thumbnail;
                newUser.google.email     = profile.emails[0].value;
                // save user
                newUser.save().then((err) => {
                    if (err) {
                        throw err; 
                    }  
                    console.log('created new user: ', newUser);
                    done(null, newUser);
                }).catch(() => {
                    console.log('promise rejected i guess');
                });
            }
        });
    })
); 