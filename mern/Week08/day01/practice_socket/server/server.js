const express = require('express');
const app = express();
const cors = require('cors');
const socket = require('socket.io');
const port = 8000;


app.use(cors());

const server = app.listen(port, () => {
    console.log(`Listening to port : ${port}`)
});

// config of the err handling
const io = socket(server, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST'],
        allowedHeaders: ['*'],  // this * is all
        credentials: true
    }
})

io.on("connection", socket => {
    console.log("NEW CLIENT CONNECTED")
    console.log("socket id", socket.id)





})


