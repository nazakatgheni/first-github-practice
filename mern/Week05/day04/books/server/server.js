const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;

require('./config/mongoose.config')

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:5173' }))

const allBooksRoutes = require('./routes/book.routes');
allBooksRoutes(app);

// or "this is the port
// app.listen(8000, ()=> console.log('Listening to port 8000'))
app.listen(port, () => console.log(`Listening to port ${port}`))