const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

// create the db schema for the user
const userSchema = mongoose.Schema({

    local            : {
        username     : String,
        email        : String,
        password     : String,
    },
    facebook         : {
        id           : String,
        username     : String,
        email        : String
    },
    twitter          : {
        id           : String,
        displayName  : String,
        username     : String
    },
    google           : {
        id           : String,
        email        : String,
        username     : String,
        thumbnail    : String
    }

});

//encrypt password for extra protection
userSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8),null);
};
userSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model('user', userSchema);

module.exports = User;