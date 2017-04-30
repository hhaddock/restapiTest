//Dependencies
var express = require('express');
var router = express.Router();

//Model
var Video = require('../models/video.js');
var Genre = require('../models/genre.js');

/* Routing Logic */
//Get all videos
router.get('/videos', function(req, res){
  Video.find(function(err, videos){
    if(err)
      res.send(err);
    res.json(videos);
  });
});

//Get a specific video
router.get('/videos/:video_id', function(req, res){
  Video.findOne({
    _id: req.params.video_id
  }, function(err, video){
    if(err)
      res.send(err);
    res.json(video);
  });
})

//Add a new Video
router.post('/videos', function(req, res){
  Video.create({
    title : req.body.title,
    videoID : req.body.videoID,
    genre : req.body.genre
  },
  function(err, videos){
    if(err)
      res.send(err);

    Video.find(function(err, videos){
      if(err)
        res.send(err)
      res.json(videos);
    });
  });
});

//Delete a video
router.delete('/videos/:video_id', function(req, res){
  Video.remove({
    _id : req.params.video_id
  },
  function(err, videos){
    if(err)
      res.send(err);

    Video.find(function(err, videos){
      if(err)
        res.send(err)
      res.json(videos);
    });
  });
});

//Get all music video genres
router.get('/genres', function(req, res){
  Genre.find(function(err, genres){
    if(err)
      res.send(err);
    res.json(genres);
  });
});

//Get a specific genre
router.get('/genres/:genre_id', function(req, res){
  Genre.findOne({
    _id: req.params.genre_id
  }, function(err, genre){
    if(err)
      res.send(err);
    res.json(genre);
  });
});

//Add a new Genre
router.post('/genres', function(req, res){
  Genre.create({
    genre : req.body.genre
  },
  function(err, videos){
    if(err)
      res.send(err);

    Genre.find(function(err, genres){
      if(err)
        res.send(err)
      res.json(genres);
    });
  });
});

//Return router
module.exports = router;
