const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');
const User = require('../models/user-model');
const LocalStrategy = require('passport-local').Strategy;

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id).then((user) => {
            done(null, user);
        });
    });
// Google+ strategy
passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: '/auth/google/redirect'
    }, (accessToken, refreshToken, profile, done) => {
        // check if user already exists in our own db
        User.findOne({googleId: profile.id}).then((currentUser) => {
            if(currentUser){
                // already have this user
                console.log('user is: ', currentUser);
                done(null, currentUser);
            } else {
                // if not, create user in our db
                new User({
                    googleId: profile.id,
                    username: profile.displayName,
                    thumbnail: profile._json.image.url
                }).save().then((newUser) => {
                    console.log('created new user: ', newUser);
                    done(null, newUser);
                });
            }
        });
    })
);

// Local signup strategy
passport.use('signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    emailField: 'email',
    passReqToCallback:true
},
    (req, username, email, password, done) => {
        User.findOne({ email: email, username: username }, (err, user) => {
            if (err) { return done(err); }
            if (user) {
                return done(null, false, req.flash('signupMessage','Email/username is already taken...' ));
            } else {
                var newUser = new User();
                newUser.email = email;
                newUser.password = newUser.generateHash(password);
                newUser.save((err) => {
                    if (err) throw err;
                    console.log('created new user: ', newUser);
                    return done(null, newUser);
                });
            }
        });
    })
);

// Local login strategy
passport.use('login', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback:true
},
    (req,email, password, done) => {
        User.findOne({ email: email }, (err, user) => {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, req.flash('loginMessage','Incorrect username.' ));
            }
            if (!user.validPassword(password)) {
                return done(null, false,  req.flash('loginMessage','Incorrect password !' ));
            }
            return done(null, user);
        });
    }
));