const express = require("express");

const router = express.Router();


const Movie = require("../model/Movie");

router.get("/movie", (req, res) => {
    Movie.find()
      .then((movies) => res.json(movies))
      .catch((err) => res.status(400).json("Error: " + err));
  });

router.post("/movie", (req, res) => {
    const {movieName,year,genre } = req.body;
    const newMovie = new Movie({movieName,year,genre });
 
  newMovie
  
     .save()
     .then(() => res.json("Movie Added Successfully"))
     .catch((err) => res.status(400).json("Error: " + err));
 });

 router.delete("/movie/:id", (req, res) => {
    Movie.findByIdAndDelete(req.params.id)
      .then(() => res.json("Movie Deleted Successfully"))
      .catch((err) => res.status(400).json("Error: " + err));
    
  });
  
  router.put("/movie/:id", (req, res) => {
    Movie.findById(req.params.id)
      .then((movie) => {
        
        movie.movieName = req.body.movieName;
        movie.year = req.body.year;
        movie.genre = req.body.genre;
        
  
        movie
          .save()
          .then(() => res.json("Movie updated Successfully"))
          .catch((err) => res.status(400).json("Error: " + err));
      })
      .catch((err) => res.status(400).json("Error: " + err));
  });
  
  router.get("/movie/:id", (req, res) => {
    Movie.findById(req.params.id)
      .then((movies) => res.json(movies))
      .catch((err) => res.status(400).json("Error: " + err));
  });

  module.exports = router;