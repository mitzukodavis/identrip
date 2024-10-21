const mongoose = require('mongoose');
const Restaurant = require('./models/restaurant.model');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const restaurantsData = [
  {
    name: "Chicha por Gaston Acurio",
    cuisine: "Peruana Contemporánea",
    address: "Plaza Regocijo 261, Cusco 08002",
    rating: 4.5,
    priceRange: "$$$",
    speciality: "Alpaca a la parrilla",
    nearLandmark: "Plaza de Armas"
  },
  {
    name: "Pachapapa",
    cuisine: "Peruana Tradicional",
    address: "Carmen Bajo 120, Cusco 08003",
    rating: 4.3,
    priceRange: "$$",
    speciality: "Cuy al horno",
    nearLandmark: "San Blas"
  },
  {
    name: "Cicciolina",
    cuisine: "Fusión Mediterránea-Andina",
    address: "Calle Triunfo 393, Cusco 08002",
    rating: 4.6,
    priceRange: "$$$",
    speciality: "Risotto de quinua",
    nearLandmark: "Catedral de Cusco"
  },
  {
    name: "Green Point",
    cuisine: "Vegetariana/Vegana",
    address: "Carmen Bajo 235, Cusco 08003",
    rating: 4.7,
    priceRange: "$$",
    speciality: "Hamburguesa de lentejas",
    nearLandmark: "San Blas"
  },
  {
    name: "Morena Peruvian Kitchen",
    cuisine: "Peruana Moderna",
    address: "Calle Plateros 348, Cusco 08002",
    rating: 4.4,
    priceRange: "$$",
    speciality: "Lomo saltado",
    nearLandmark: "Plaza de Armas"
  }
];

const seedDB = async () => {
  await Restaurant.deleteMany({});
  await Restaurant.insertMany(restaurantsData);
  console.log("Database seeded!");
  mongoose.connection.close();
};

seedDB();
