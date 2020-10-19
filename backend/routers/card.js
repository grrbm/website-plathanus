const express = require('express'),
      router = express.Router({mergeParams: true}),
      Card = require('../models/card');

//INDEX - GET all cards
router.get('/cards', async (req,res) => {
    console.log("REQUEST ::  get all cards");
    try{
      const cards = await Card.find({})
      console.log(JSON.stringify(cards));
      return res.send(cards)
    } catch(error) {
      return res.status(500).json({
        error: true,
        message: e.toString()
      });
    }
});

// SHOW - get specific slide
router.get('/cards/:id', async (req,res) => {
  try{
      const card = await Card.findById(req.params.id)
      if (!card)
      {
        return res.status(404).send()
      }
      console.log("RETURNING A CARD: "+card)
      res.send(card);
  } catch(error) {
      return res.status(500).send(error)
  }
})
  
module.exports = router;