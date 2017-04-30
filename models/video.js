//Dependencies
var mongoose = require('mongoose');

var Video = mongoose.model('Video', {
  title: String,
  videoID: String,
  genre: String
});

module.exports = Video;
