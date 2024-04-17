const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;

require('./config/stores.config')

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:5173' }))

const allStoresRoutes = require('./routes/stores.routes');
allStoresRoutes(app);

app.listen(8000, () => console.log(`Listening to port ${port}`))

