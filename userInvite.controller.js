exports.sendInvite = async (req, res) => {
  const fan = req.body.fan;
  const price = req.body.price;
  
  // Check if a fan was selected
  if (!fan || fan.length === 0) {
    return res.status(400).json({ error: 'Please select at least one fan.' });
  }
  
  // Check if the price is valid
  if (isNaN(price) || price <= 0) {
    return res.status(400).json({ error: 'Please set a valid price.' });
  }

  // Redirect the user to a new page
  res.send('Hey Damilola, you just sent an invite to your fans!');
};
