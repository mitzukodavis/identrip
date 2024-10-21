const express = require('express');
const router = express.Router();
const Booking = require('../models/booking.model');
const { mintRestaurantNFT } = require('../services/stacksService');

router.post('/book', async (req, res) => {
  try {
    const { userId, restaurantId, date, time, partySize } = req.body;
    const booking = new Booking({ userId, restaurantId, date, time, partySize });
    await booking.save();
    
    // Mint NFT for the booking
    const nftResult = await mintRestaurantNFT(restaurantId);
    booking.nftTokenId = nftResult.tokenId;
    await booking.save();

    res.status(201).json({ message: 'Booking created successfully', booking });
  } catch (error) {
    res.status(500).json({ error: 'Booking failed' });
  }
});

module.exports = router;
