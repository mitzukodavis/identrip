const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  user: String,
  comment: String,
  rating: Number,
  date: Date,
  verified: Boolean,
  gpsData: {
    latitude: Number,
    longitude: Number
  },
  photoUrl: String
});

const restaurantSchema = new Schema({
  name: { type: String, required: true },
  cuisine: { type: String, required: true },
  address: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  priceRange: { type: String, required: true, enum: ['$', '$$', '$$$', '$$$$'] },
  speciality: { type: String, required: true },
  nearLandmark: { type: String, required: true },
  nftTokenId: { type: String, unique: true },
  verified: { type: Boolean, default: false },
  reviews: [reviewSchema],
  stxAddress: { type: String, unique: true },
  sustainabilityScore: { type: Number, min: 0, max: 100 },
  totalBookings: { type: Number, default: 0 },
  stxBookings: { type: Number, default: 0 },
  fraudScore: { type: Number, min: 0, max: 100, default: 0 }
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
