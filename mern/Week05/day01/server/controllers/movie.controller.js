const Movie = require('../models/movie.model')


// this is from express library
module.exports = {

    // get all movies
    getAllMovies: (req, res) => {
        // res.json({ message: "NEW MOVIE CREATED" })

        Movie.find()
            .then((allMovie) => {
                console.log(allMovie)
                res.json(allMovie)
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            })

    },

    // Create a Movie
    createMovie: (req, res) => {
        // console.log(req)
        Movie.create(req.body)
            .then((newMovie) => {
                console.log(newMovie);
                res.json(newMovie);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err)
            })
    },


    // get one by id
    getOneMovie: (req, res) => {
        Movie.findById(req.params.id)
            .then((oneMovie) => {
                console.log(oneMovie);
                res.json(oneMovie);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            })
    },


    //Update a movie
    updateMovie: (req, res) => {
        Movie.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then((updateMovie) => {
                console.log(updateMovie);
                res.json(updateMovie);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            })
    },

    // delete a movie
    deleteMovie: (req, res) => {
        Movie.findByIdAndDelete(req.params.id)
            .then((deletedMovie) => {
                console.log(deletedMovie);
                res.json(deletedMovie)
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            })
    }



}