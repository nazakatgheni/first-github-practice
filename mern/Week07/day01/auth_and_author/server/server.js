const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;
const cookieParser = require('cookie-parser')


require('./config/mongoose.config')
require('dotenv').config();

app.use(cookieParser())
app.use(cors({ credentials: true, origin: 'http://localhost:5173' }))
app.use(express.json(), express.urlencoded({ extended: true }));

require('./routes/user.routes')(app)

app.listen(port, () => console.log(`Listening port ${port}`));