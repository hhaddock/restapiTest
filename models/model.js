//Dependencies
var mongoose = require('mongoose');

var Video = mongoose.model('Video', {
  title: String,
  videoID: String
});

module.exports = Video;
