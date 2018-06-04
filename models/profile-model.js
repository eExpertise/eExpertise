const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create the db schema for the user
const profileSchema = mongoose.Schema({

    name:      String,
    interests: String,
    expertise: String,


});

const Profile = mongoose.model('profile', profileSchema);

module.exports = Profile;