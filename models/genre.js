//Dependencies
var mongoose = require('mongoose');

var Genre = mongoose.model('Genre', {
  genre: String
});

module.exports = Genre;
