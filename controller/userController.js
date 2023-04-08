


exports.sendInvite = async (req, res) => {
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

}

// Define a route for the new page
exports.newPage = async(req, res) =>{
    const fan = req.query.fan;
    const price = req.query.price;

   // Check if fan, price, and fanName are defined
   const fanName = req.query.fanName;
   if (!fan || !price || !fanName) {
    res.send('Error: Fan, price, and fanName parameters are missing');
    return;
  }
  // Check if price is not empty
  if (!price.trim()) {
    res.send('Please enter a valid price');
    return;
  }

  // Render the new page with the fan, fanName, and price parameters
  res.send(`Hey Damilola just sent an Invite `);

}

