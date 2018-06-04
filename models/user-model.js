const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

// create the db schema for the user
const userSchema = mongoose.Schema({

    local: {
        username:  String,
        thumbnail: String,
        email:     String,
        password:  String,
        interests: String,
        expertise: String
    },
    facebook: {
        id:        String,
        token:     String,
        username:  String,
        email:     String,
        thumbnail: String,
        interests: String,
        expertise: String
    },
    twitter: {
        id:        String,
        username:  String,
        username:  String,
        interests: String,
        expertise: String,
        thumbnail: String
    },
    google: {
        id:        String,
        email:     String,
        username:  String,
        thumbnail: String,
        interests: String,
        expertise: String
    }

});

//encrypt password for extra protection
userSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
userSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model('user', userSchema);

module.exports = User;