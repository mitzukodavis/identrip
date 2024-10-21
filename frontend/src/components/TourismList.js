import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TourismList() {
  const [tourismItems, setTourismItems] = useState({ restaurants: [], travelAgencies: [], touristAttractions: [] });
  const [newItem, setNewItem] = useState({
    type: 'restaurant',
    name: '',
    address: '',
    rating: 1,
    priceRange: '$',
    nearLandmark: '',
    stxAddress: '',
    sustainabilityScore: 50,
    description: '',
    website: '',
    phoneNumber: '',
    openingHours: '',
    // Campos específicos
    cuisine: '',
    speciality: '',
    menuUrl: '',
    services: '',
    languages: '',
    licenseNumber: '',
    attractionType: '',
    entryFee: '',
    bestTimeToVisit: '',
    accessibilityInfo: ''
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [restaurantsRes, agenciesRes, attractionsRes] = await Promise.all([
        axios.get(`${process.env.REACT_APP_API_URL}/api/restaurants`),
        axios.get(`${process.env.REACT_APP_API_URL}/api/travel-agencies`),
        axios.get(`${process.env.REACT_APP_API_URL}/api/tourist-attractions`)
      ]);
      
      setTourismItems({
        restaurants: restaurantsRes.data,
        travelAgencies: agenciesRes.data,
        touristAttractions: attractionsRes.data
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let endpoint;
      switch(newItem.type) {
        case 'restaurant':
          endpoint = '/api/restaurants';
          break;
        case 'travelAgency':
          endpoint = '/api/travel-agencies';
          break;
        case 'touristAttraction':
          endpoint = '/api/tourist-attractions';
          break;
        default:
          throw new Error('Invalid type');
      }
      await axios.post(`${process.env.REACT_APP_API_URL}${endpoint}/add`, newItem);
      setNewItem({
        type: 'restaurant',
        name: '',
        address: '',
        rating: 1,
        priceRange: '$',
        nearLandmark: '',
        stxAddress: '',
        sustainabilityScore: 50,
        description: '',
        website: '',
        phoneNumber: '',
        openingHours: '',
        cuisine: '',
        speciality: '',
        menuUrl: '',
        services: '',
        languages: '',
        licenseNumber: '',
        attractionType: '',
        entryFee: '',
        bestTimeToVisit: '',
        accessibilityInfo: ''
      });
      fetchData();
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const renderCommonFields = () => (
    <>
      <input name="name" value={newItem.name} onChange={handleInputChange} placeholder="Nombre" required />
      <input name="address" value={newItem.address} onChange={handleInputChange} placeholder="Dirección" required />
      <input name="rating" type="number" min="1" max="5" value={newItem.rating} onChange={handleInputChange} required />
      <select name="priceRange" value={newItem.priceRange} onChange={handleInputChange} required>
        <option value="$">$</option>
        <option value="$$">$$</option>
        <option value="$$$">$$$</option>
        <option value="$$$$">$$$$</option>
      </select>
      <input name="nearLandmark" value={newItem.nearLandmark} onChange={handleInputChange} placeholder="Cerca de" required />
      <input name="stxAddress" value={newItem.stxAddress} onChange={handleInputChange} placeholder="Dirección STX" required />
      <input name="sustainabilityScore" type="number" min="0" max="100" value={newItem.sustainabilityScore} onChange={handleInputChange} placeholder="Puntuación de Sostenibilidad" required />
      <textarea name="description" value={newItem.description} onChange={handleInputChange} placeholder="Descripción" required />
      <input name="website" value={newItem.website} onChange={handleInputChange} placeholder="Sitio web" />
      <input name="phoneNumber" value={newItem.phoneNumber} onChange={handleInputChange} placeholder="Teléfono" />
      <input name="openingHours" value={newItem.openingHours} onChange={handleInputChange} placeholder="Horario de apertura" />
    </>
  );

  return (
    <div>
      <h2>Turismo en Cusco - IdenTrip</h2>
      <form onSubmit={handleSubmit}>
        <select name="type" value={newItem.type} onChange={handleInputChange}>
          <option value="restaurant">Restaurante</option>
          <option value="travelAgency">Agencia de Viajes</option>
          <option value="touristAttraction">Atracción Turística</option>
        </select>
        {renderCommonFields()}
        {newItem.type === 'restaurant' && (
          <>
            <input name="cuisine" value={newItem.cuisine} onChange={handleInputChange} placeholder="Cocina" required />
            <input name="speciality" value={newItem.speciality} onChange={handleInputChange} placeholder="Especialidad" required />
            <input name="menuUrl" value={newItem.menuUrl} onChange={handleInputChange} placeholder="URL del menú" />
          </>
        )}
        {newItem.type === 'travelAgency' && (
          <>
            <input name="services" value={newItem.services} onChange={handleInputChange} placeholder="Servicios (separados por coma)" required />
            <input name="languages" value={newItem.languages} onChange={handleInputChange} placeholder="Idiomas (separados por coma)" required />
            <input name="licenseNumber" value={newItem.licenseNumber} onChange={handleInputChange} placeholder="Número de licencia" />
          </>
        )}
        {newItem.type === 'touristAttraction' && (
          <>
            <input name="attractionType" value={newItem.attractionType} onChange={handleInputChange} placeholder="Tipo de atracción" required />
            <input name="entryFee" value={newItem.entryFee} onChange={handleInputChange} placeholder="Tarifa de entrada" />
            <input name="bestTimeToVisit" value={newItem.bestTimeToVisit} onChange={handleInputChange} placeholder="Mejor hora para visitar" />
            <input name="accessibilityInfo" value={newItem.accessibilityInfo} onChange={handleInputChange} placeholder="Información de accesibilidad" />
          </>
        )}
        <button type="submit">Agregar</button>
      </form>

      <h3>Restaurantes</h3>
      <ul>
        {tourismItems.restaurants.map(restaurant => (
          <li key={restaurant._id}>
            <h4>{restaurant.name} {restaurant.verified ? '✅' : '❓'}</h4>
            <p>Cocina: {restaurant.cuisine}</p>
            <p>Dirección: {restaurant.address}</p>
            <p>Calificación: {restaurant.rating}/5</p>
            <p>Rango de precios: {restaurant.priceRange}</p>
            <p>Especialidad: {restaurant.speciality}</p>
            <p>Cerca de: {restaurant.nearLandmark}</p>
            <p>NFT Token ID: {restaurant.nftTokenId || 'Pendiente'}</p>
            <p>Puntuación de Sostenibilidad: {restaurant.sustainabilityScore}/100</p>
            <p>Total de Reservas: {restaurant.totalBookings}</p>
            <p>Reservas con STX: {restaurant.stxBookings}</p>
          </li>
        ))}
      </ul>

      <h3>Agencias de Viajes</h3>
      <ul>
        {tourismItems.travelAgencies.map(agency => (
          <li key={agency._id}>
            <h4>{agency.name} {agency.verified ? '✅' : '❓'}</h4>
            <p>Dirección: {agency.address}</p>
            <p>Calificación: {agency.rating}/5</p>
            <p>Rango de precios: {agency.priceRange}</p>
            <p>Servicios: {agency.services.join(', ')}</p>
            <p>Idiomas: {agency.languages.join(', ')}</p>
            <p>Cerca de: {agency.nearLandmark}</p>
            <p>NFT Token ID: {agency.nftTokenId || 'Pendiente'}</p>
            <p>Puntuación de Sostenibilidad: {agency.sustainabilityScore}/100</p>
          </li>
        ))}
      </ul>

      <h3>Atracciones Turísticas</h3>
      <ul>
        {tourismItems.touristAttractions.map(attraction => (
          <li key={attraction._id}>
            <h4>{attraction.name} {attraction.verified ? '✅' : '❓'}</h4>
            <p>Tipo: {attraction.type}</p>
            <p>Dirección: {attraction.address}</p>
            <p>Descripción: {attraction.description}</p>
            <p>Calificación: {attraction.rating}/5</p>
            <p>Rango de precios: {attraction.priceRange}</p>
            <p>Horario: {attraction.openingHours}</p>
            <p>Tarifa: {attraction.entryFee}</p>
            <p>Cerca de: {attraction.nearLandmark}</p>
            <p>NFT Token ID: {attraction.nftTokenId || 'Pendiente'}</p>
            <p>Puntuación de Sostenibilidad: {attraction.sustainabilityScore}/100</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TourismList;
