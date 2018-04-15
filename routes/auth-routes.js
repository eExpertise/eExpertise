const router = require('express').Router();
const passport = require('passport');

// auth login
router.get('/login', (req, res) => {
    res.render('login', { user: req.user });
});

// auth logout
router.get('/logout', (req, res) => {
    // handle with passport
    req.logout();
    res.redirect('/');
});

// auth signup
router.get('/signup', (req, res) => {
    res.json({message: req.flash('signupMessage')});
}); 

// auth with local
router.post('/signup', passport.authenticate('signup', {
    successRedirect : '/profile/',
    failureRedirect : '/signup.html',
    failureFlash : true
}));

// auth with google+
router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.redirect('/profile/');
});

module.exports = router;