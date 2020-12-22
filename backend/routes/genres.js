const express = require('express');
const router = express.Router();
const {Genre} = require("../models/Genre");


//get method to retrieve data
router.get('/displayGenre', function(req,res){
    Genre.find({})
    .exec(function(err, genres){
        if(err){
            console.log('error')
        }else {
            res.json(genres);
        }
    });
});


module.exports = router;