const router = require('express').Router();
const passport = require('passport');

// auth login
router.get('/login', (req, res) => {
    res.send('you are logged in, this is your profile - ' + req.user.username);
});

// auth logout
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

// auth route for google+
router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get('/google/callback', passport.authenticate('google', {
    successRedirect : '../profile',
    failureRedirect : '/'
}));

// auth route for Facebook
router.get('/facebook', passport.authenticate('facebook', { 
    scope: ['public_profile', 'email']
}));

router.get('/facebook/callback', passport.authenticate('facebook', {
      successRedirect : '../profile',
      failureRedirect : '/'
  }));

module.exports = router;