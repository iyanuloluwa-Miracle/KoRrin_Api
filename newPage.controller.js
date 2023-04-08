exports.newPage = async(req, res) =>{
    const fan = req.query.fan;
    const price = req.query.price;
  
    // Check if fan and price are defined
    if (!fan || !price) {
      res.send('Error: Fan and price parameters are missing');
      return;
    }
  
    // Render the new page with the fan and price parameters
    res.send(`Hey Damilola just sent an Invite to a Fan`)
}
  