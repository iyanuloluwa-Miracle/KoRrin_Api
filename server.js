const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/userRoutes')

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port= process.env.PORT || 3000 

app.use('/api', router)

// Start the server

app.listen(port, ()=> console.log(`listening to port ${port}`))