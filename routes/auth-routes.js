const authRouter = require('express').Router();
const passport = require('passport');

// auth login
authRouter.get('/login', (req, res) => {
    res.send('you are logged in, this is your profile - ' + req.user.username);
});

// auth logout
authRouter.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

// auth route for google+
authRouter.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
authRouter.get('/google/callback', passport.authenticate('google', {
    successRedirect : '../profile',
    failureRedirect : '/'
}));

// auth route for Facebook
authRouter.get('/facebook', passport.authenticate('facebook', { 
    scope: ['public_profile', 'email']
}));

authRouter.get('/facebook/callback', passport.authenticate('facebook', {
      successRedirect : '../profile',
      failureRedirect : '/'
  }));

module.exports = authRouter;