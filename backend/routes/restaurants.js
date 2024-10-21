const router = require('express').Router();
let Restaurant = require('../models/restaurant.model');
const { mintRestaurantNFT } = require('../services/stacksService');

router.route('/').get((req, res) => {
  Restaurant.find()
    .then(restaurants => res.json(restaurants))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post(async (req, res) => {
  const { name, cuisine, address, rating, priceRange, speciality, nearLandmark } = req.body;

  const newRestaurant = new Restaurant({
    name,
    cuisine,
    address,
    rating,
    priceRange,
    speciality,
    nearLandmark
  });

  try {
    const savedRestaurant = await newRestaurant.save();
    const nftResult = await mintRestaurantNFT(name);
    savedRestaurant.nftTokenId = nftResult.tokenId;
    await savedRestaurant.save();
    res.json('Restaurant added and NFT minted!');
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

module.exports = router;
