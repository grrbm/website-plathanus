const express = require('express'),
      router = express.Router({mergeParams: true}),
      Slide = require('../models/slide'),
      axios = require('axios')


async function getBase64(url) {
  const payload = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
  const arrayBuffer = await axios({
    method: 'get',
    url: url,
    headers: payload,
    responseType: 'arraybuffer'
  });
  //const arrayBuffer = await axios.get(url, { responseType: 'arraybuffer' });
  const base64Response = Buffer.from(arrayBuffer.data, 'binary').toString('base64');
  return base64Response;
}      

//INDEX - GET all slides
router.get('/slides', async (req,res) => {
    console.log("REQUEST ::  get all slides");
    try{
      const slides = await Slide.find({})
      const slideOne = slides[0];
      //const converted = await getBase64(slideOne.imageUrl);
      const slidesConverted = await Promise.all(slides.map(item => getBase64(item.imageUrl)));

      //console.log("converted: "+converted);
      //console.log(JSON.stringify(slides));
      return res.send(slidesConverted);
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