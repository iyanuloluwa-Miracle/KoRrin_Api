const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/userRoutes')

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port= process.env.PORT || 3000 

//app.use('/api/user', router)



// Define the route for sending an invite
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

// Define the route for the new page
app.get('/newPage', (req, res) => {
  const fan = req.query.fan;
  const price = req.query.price;

  // Check if fan and price are defined
  if (!fan || !price) {
    res.send('Error: Fan and price parameters are missing');
    return;
  }

  // Render the new page with the fan and price parameters
  res.send(`Hey Damilola just sent an Invite`);
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

// Start the server

app.listen(port, ()=> console.log(`listening to port ${port}`))