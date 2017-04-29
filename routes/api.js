//Dependencies
var express = require('express');
var router = express.Router();

//Model
var Video = require('../models/model');

//Routing Logic
router.get('/videos', function(req, res){
  Video.find(function(err, videos){
    if(err)
      res.send(err);
    res.json(videos);
  });
});

router.get('/videos/:video_id', function(req, res){
  Video.findOne({
    _id: req.params.video_id
  }, function(err, video){
    if(err)
      res.send(err);
    res.json(video);
  });
})

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
//Return router
module.exports = router;
