const express = require('express');
const app = express();
const routes = require('./routes');

// Set up body parser middleware
app.use(express.urlencoded({ extended: false }));

// Set up routes
app.use('/', routes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
