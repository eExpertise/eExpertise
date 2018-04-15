const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;

// create the db schema for the user
const userSchema = new Schema({
    username: String,
    googleId: String,
    thumbnail: String
});

//encrypt password for extra protection
userSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password,bcrypt.genSaltSync(8),null);
};
userSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.password);
};

// wrap the schema in a nice model
const User = mongoose.model('user', userSchema);

module.exports = User;