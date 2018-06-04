const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create the db schema for the user
const videoSchema = mongoose.Schema({

    name:         String,
    interestType: String,
    skillLevel:   String,


});

const Video = mongoose.model('video', videoSchema);

module.exports = Video;