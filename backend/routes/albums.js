const express = require('express');
const router = express.Router();
const {Album} = require("../models/Album");


//post method to save data
router.post("/addAlbum", (req, res) => {

    //save data by creating a new object
    const album = new Album(req.body)
  
        album.save((err) => {
            if(err) return res.status(400).json({ success: false, err})
            return res.status(200).json({ success: true})
        })
  });


  //get method to retrieve data
  router.get('/displayAlbum', function(req,res){
      Album.find({})
      .exec(function(err, albums){
          if(err){
              console.log('error')
          }else {
              res.json(albums);
          }
      });
  });


//get method to search
router.get('/search', function(req,res){
    Album.find({})
    .exec(function(err, albums){
        if(err) {
            console.log('error')
        }else {
            res.json(albums);
        }
    });
});


//delete method
router.post('/delete/:id',function (req, res) {
    Album.findByIdAndRemove({_id: req.params.id}, function(err, album){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
  });


//edit method
router.get('/edit/:id', function (req, res) {
    let id = req.params.id;
    Album.findById(id, function (err, album){
        res.json(album);
    });
  });
  
//update method
  router.post('/update/:id', function (req, res) {
    Album.findById(req.params.id, function(err, album) {
    if (!album)
      res.status(404).send("data is not found");
    else {
        album.title = req.body.title;
        album.artist = req.body.artist;
        album.genre = req.body.genre;
        album.date = req.body.date;
  
        album.save().then(album => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
  });

module.exports = router;