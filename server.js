const express = require('express');
const app = express();
var flash = require('connect-flash');
const cookieSession = require('cookie-session');
const passport = require('passport');
const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const bcrypt = require('bcrypt-nodejs');
const bodyParser = require('body-parser');
const morgan = require('morgan');

//setting up middleware + initializing passport
app.use(express.static('views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('dev'));
app.use(passport.initialize());
app.use(passport.session());

// set up session cookies
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));

app.use(flash());

// connect to mongodb
mongoose.connect(keys.mongodb.dbURI, () => {
    console.log('connected to mongodb');
});

// set up routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

// create home route
app.get('/', (req, res) => {
    res.render('home');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
	console.log(`The server is listening on port ${PORT}`);
});

function newFunction() {
	return '/views/index.html';
}
