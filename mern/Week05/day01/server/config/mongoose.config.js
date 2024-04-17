//#4
const mongoose = require('mongoose');

//              connection string           make sure u changed the name, otherwise it will over write
mongoose.connect('mongodb://127.0.0.1:27017/marchMovieDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database')) // promise
    .catch(err => console.log('Something went wrong when connecting to the database ', err));