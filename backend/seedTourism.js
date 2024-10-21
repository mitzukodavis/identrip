const mongoose = require('mongoose');
const { Restaurant, TravelAgency, TouristAttraction } = require('./models/tourism.model');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const tourismData = {
  restaurants: [
    {
      name: "Chicha por Gaston Acurio",
      cuisine: "Peruana Contemporánea",
      address: "Plaza Regocijo 261, Cusco 08002",
      rating: 4.5,
      priceRange: "$$$",
      speciality: "Alpaca a la parrilla",
      nearLandmark: "Plaza de Armas",
      description: "Restaurante de alta cocina peruana del famoso chef Gastón Acurio.",
      website: "https://chicha.com.pe/",
      phoneNumber: "+51 84 240520",
      openingHours: "12:00 PM - 11:00 PM",
      sustainabilityScore: 85
    },
    {
      name: "Pachapapa",
      cuisine: "Peruana Tradicional",
      address: "Carmen Bajo 120, Cusco 08003",
      rating: 4.3,
      priceRange: "$$",
      speciality: "Cuy al horno",
      nearLandmark: "San Blas",
      description: "Restaurante rústico con auténtica comida cusqueña.",
      website: "https://cuscorestaurants.com/pachapapa/",
      phoneNumber: "+51 84 241318",
      openingHours: "12:00 PM - 10:00 PM",
      sustainabilityScore: 80
    },
  ],
  travelAgencies: [
    {
      name: "Cusco Peru Travel",
      address: "Calle Plateros 364, Cusco 08002",
      rating: 4.7,
      priceRange: "$$",
      services: ["Tours a Machu Picchu", "Caminata por el Valle Sagrado", "City tours"],
      languages: ["Español", "Inglés", "Francés"],
      nearLandmark: "Plaza de Armas",
      description: "Agencia de viajes especializada en tours personalizados en Cusco y alrededores.",
      website: "https://www.cuscoperutravel.com/",
      phoneNumber: "+51 84 234123",
      sustainabilityScore: 90
    },
    {
      name: "Alpaca Expeditions",
      address: "Calle Garcilaso 265, Cusco 08002",
      rating: 4.8,
      priceRange: "$$$",
      services: ["Camino Inca", "Salkantay Trek", "Tours de aventura"],
      languages: ["Español", "Inglés", "Alemán"],
      nearLandmark: "Mercado de San Pedro",
      description: "Operador turístico especializado en trekkings y aventuras en la región de Cusco.",
      website: "https://www.alpacaexpeditions.com/",
      phoneNumber: "+51 84 254278",
      sustainabilityScore: 95
    },
  ],
  touristAttractions: [
    {
      name: "Machu Picchu",
      type: "Sitio arqueológico",
      address: "Machu Picchu, Cusco",
      description: "Antigua ciudad inca del siglo XV, considerada una de las 7 maravillas del mundo moderno.",
      rating: 5,
      priceRange: "$$$",
      openingHours: "6:00 AM - 5:30 PM",
      entryFee: "S/. 152 para adultos extranjeros",
      nearLandmark: "Aguas Calientes",
      website: "https://www.machupicchu.gob.pe/",
      sustainabilityScore: 85,
      bestTimeToVisit: "Temprano en la mañana o al atardecer",
      accessibilityInfo: "Acceso limitado para personas con movilidad reducida"
    },
    {
      name: "Sacsayhuamán",
      type: "Fortaleza",
      address: "Carretera a Sacsayhuamán, Cusco",
      description: "Impresionante fortaleza inca con enormes bloques de piedra perfectamente ensamblados.",
      rating: 4.6,
      priceRange: "$$",
      openingHours: "7:00 AM - 5:30 PM",
      entryFee: "S/. 70 para turistas extranjeros (boleto turístico)",
      nearLandmark: "Centro de Cusco",
      website: "https://www.boleto.cusco.gob.pe/",
      sustainabilityScore: 80,
      bestTimeToVisit: "Por la mañana para evitar multitudes",
      accessibilityInfo: "Parcialmente accesible para personas con movilidad reducida"
    },
  ]
};

const seedDB = async () => {
  await Restaurant.deleteMany({});
  await TravelAgency.deleteMany({});
  await TouristAttraction.deleteMany({});

  await Restaurant.insertMany(tourismData.restaurants);
  await TravelAgency.insertMany(tourismData.travelAgencies);
  await TouristAttraction.insertMany(tourismData.touristAttractions);

  console.log("Database seeded!");
  mongoose.connection.close();
};

seedDB();
