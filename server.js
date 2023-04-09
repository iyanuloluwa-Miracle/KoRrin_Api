const express = require('express');
const app = express();
const routes = require('./routes');
const bodyParser = require('body-parser')
// Set up body parser middleware
app.use(express.urlencoded({ extended: false }));


app.use(bodyParser.json())
// Set up routes
app.use('/', routes);

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('API is running');
});

// Start the server
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
