const express = require('express'),
      router = express.Router({mergeParams: true}),
      Slide = require('../models/slide');

//INDEX - GET all slides
router.get('/slides', async (req,res) => {
    console.log("REQUEST ::  get all slides");
    try{
      const slides = await Slide.find({})
      console.log(JSON.stringify(slides));
      return res.send(slides)
    } catch(error) {
      return res.status(500).json({
        error: true,
        message: e.toString()
      });
    }
});

// SHOW - get specific slide
router.get('/slides/:id', async (req,res) => {
  try{
      const slide = await Slide.findById(req.params.id)
      if (!slide)
      {
        return res.status(404).send()
      }
      console.log("RETURNING A SLIDE: "+slide)
      res.send(slide);
  } catch(error) {
      return res.status(500).send(error)
  }
})
  



module.exports = router;