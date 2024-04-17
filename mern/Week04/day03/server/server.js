const express = require('express')
// this means to import express

const app = express();
// this means to create an instance of express

const port = 8000;
// this means to set the port to 8000 which is also going to be the base url

//Movies -- CRUD
// index will be the id for each value
const movies = [
    { title: "Star Wars", year: 1977 },
    { title: "The Matrix", year: 1999 },
    { title: "Shrek", year: 2001 }
]


app.use(express.json());  // this means to use express.json
app.use(express.urlencoded({ extended: true })) // this means to use urlencoded
// this will allow us the http methods

//Routes
app.get('/api', (req, res) => {  // most of the time this will be api
    res.json({ message: "Hello World" })
})


//HTTP Methods/ Requests
app.get('/api/movies', (req, res) => {
    res.json({ movies: movies }) // key and value, get all the movie
})

// the result in postman
// {
//     "movies": [   this movies is the key
//         {
//             "title": "Star Wars",
//             "year": 1977
//         },
//         {
//             "title": "The Matrix",
//             "year": 1999
//         },
//         {
//             "title": "Shrek",
//             "year": 2001
//         }
//     ]
// }


// Create a movie
app.post('/api/movies', (req, res) => {
    console.log(req.body)
    movies.push(req.body)
    res.json({ message: "Created a Movie" })
})

// how we create movie
// go postman, go to body, click raw, and it has to be JSON file, then add new movie in the body:
// {
//     "title": "Barbie",
//     "year": 2023
// }

// change the post to get then send request,we will get the new movie in obj

// when we kill then server in terminal, because of we don't have database, all the new req movie will refreshed, we will only have the movies in the server.js 


// get a movie by id
// here we assume that index number of the movie array is the id
app.get('/api/movies/:id', (req, res) => {
    console.log(req.params)
    const movie_id = req.params.id
    res.json(movies[movie_id])
})

// Update a movie
app.put('/api/movies/:id', (req, res) => {
    const movie_id = req.params.id;
    console.log(req.body)
    movies[movie_id] = req.body
    res.json({ status: "Success" })
})

// Delete
app.delete('/api/movies/:id', (req, res) => {
    const movie_id = req.params.id;
    movies.splice(movie_id, 1);
    res.json({ status: "Deleted" })
})


app.listen(port, () => console.log(`Listing to port:${port}`))

