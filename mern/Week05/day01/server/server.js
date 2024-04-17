// #1 
const express = require('express');
const app = express();

const port = 8000;

//#4
require('./config/mongoose.config')

//#2 Middleware
app.use(express.json(), express.urlencoded({ extended: true }))

//#5 

const movieRoutes = require('./routes/movie.routes');
movieRoutes(app)

//#3
app.listen(port, () => console.log(`Listening to ${port}`));


