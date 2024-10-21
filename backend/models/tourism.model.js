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
  photoUrl: String,
  rewardEarned: Number
});

const commonFields = {
  name: { type: String, required: true },
  address: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  priceRange: { type: String, required: true, enum: ['$', '$$', '$$$', '$$$$'] },
  nearLandmark: { type: String, required: true },
  nftTokenId: { type: String, unique: true },
  verified: { type: Boolean, default: false },
  reviews: [reviewSchema],
  stxAddress: { type: String, unique: true },
  sustainabilityScore: { type: Number, min: 0, max: 100 },
  totalBookings: { type: Number, default: 0 },
  stxBookings: { type: Number, default: 0 },
  fraudScore: { type: Number, min: 0, max: 100, default: 0 },
  description: String,
  website: String,
  phoneNumber: String,
  openingHours: String
};

const restaurantSchema = new Schema({
  ...commonFields,
  cuisine: { type: String, required: true },
  speciality: { type: String, required: true },
  menuUrl: String
});

const travelAgencySchema = new Schema({
  ...commonFields,
  services: [String],
  languages: [String],
  licenseNumber: String
});

const touristAttractionSchema = new Schema({
  ...commonFields,
  type: { type: String, required: true },
  entryFee: String,
  bestTimeToVisit: String,
  accessibilityInfo: String
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
const TravelAgency = mongoose.model('TravelAgency', travelAgencySchema);
const TouristAttraction = mongoose.model('TouristAttraction', touristAttractionSchema);

module.exports = { Restaurant, TravelAgency, TouristAttraction };
