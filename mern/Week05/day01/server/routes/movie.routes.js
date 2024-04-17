const MovieController = require('../controllers/movie.controller')

//          we pass app the 
module.exports = (app) => {
    // get all movie
    app.get('/api/movies', MovieController.getAllMovies);


    // Create A movie
    app.post('/api/movies', MovieController.createMovie);


    // get one movie
    app.get('/api/movies/:id', MovieController.getOneMovie);


    // update a movie
    app.put('/api/movies/:id', MovieController.updateMovie);


    // delete a movie
    app.delete('/api/movies/:id', MovieController.deleteMovie);
}
