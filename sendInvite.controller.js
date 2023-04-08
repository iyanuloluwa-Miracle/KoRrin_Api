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
  