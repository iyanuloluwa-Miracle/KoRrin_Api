const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port= process.env.PORT || 3000 

// Define a route for sending the invite
app.post('/sendInvite', (req, res) => {
  const fan = req.body.fan;
  const price = req.body.price;

  // Check if a fan was selected
  if (!fan) {
    res.send('Please, Select at least one Fan');
    return;
  }

  // Check if the price is valid
  if (isNaN(price) || price <= 0) {
    res.send('Please set Price');
    return;
  }
  
  // Redirect the user to a new page
  res.redirect(`/newPage?fan=${fan}&price=${price}`);
});

// Define a route for the new page
app.get('/newPage', (req, res) => {
  const fan = req.query.fan;
  const price = req.query.price;

  // Render the new page with the fan and price parameters
  res.send(`Hey Damilola, you just sent invite to your fan`);
});

// Start the server

app.listen(port, ()=> console.log(`listening to port ${port}`))