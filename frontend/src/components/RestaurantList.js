import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);
  const [newRestaurant, setNewRestaurant] = useState({
    name: '',
    cuisine: '',
    address: '',
    rating: 1,
    priceRange: '$',
    speciality: '',
    nearLandmark: '',
    stxAddress: '',
    sustainabilityScore: 50
  });
  const [newReview, setNewReview] = useState({
    restaurantId: '',
    comment: '',
    rating: 5,
    gpsLatitude: '',
    gpsLongitude: '',
    photoUrl: ''
  });

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/restaurants`);
      setRestaurants(response.data);
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    }
  };

  const handleInputChange = (e) => {
    setNewRestaurant({ ...newRestaurant, [e.target.name]: e.target.value });
  };

  const handleReviewInputChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/restaurants/add`, newRestaurant);
      setNewRestaurant({
        name: '',
        cuisine: '',
        address: '',
        rating: 1,
        priceRange: '$',
        speciality: '',
        nearLandmark: '',
        stxAddress: '',
        sustainabilityScore: 50
      });
      fetchRestaurants();
    } catch (error) {
      console.error('Error adding restaurant:', error);
    }
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/restaurants/${newReview.restaurantId}/reviews`, newReview);
      setNewReview({
        restaurantId: '',
        comment: '',
        rating: 5,
        gpsLatitude: '',
        gpsLongitude: '',
        photoUrl: ''
      });
      fetchRestaurants();
    } catch (error) {
      console.error('Error adding review:', error);
    }
  };

  return (
    <div>
      <h2>Restaurantes Verificados en Cusco - IdenTrip</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={newRestaurant.name} onChange={handleInputChange} placeholder="Nombre" required />
        <input name="cuisine" value={newRestaurant.cuisine} onChange={handleInputChange} placeholder="Cocina" required />
        <input name="address" value={newRestaurant.address} onChange={handleInputChange} placeholder="Dirección" required />
        <input name="rating" type="number" min="1" max="5" value={newRestaurant.rating} onChange={handleInputChange} required />
        <select name="priceRange" value={newRestaurant.priceRange} onChange={handleInputChange} required>
          <option value="$">$</option>
          <option value="$$">$$</option>
          <option value="$$$">$$$</option>
          <option value="$$$$">$$$$</option>
        </select>
        <input name="speciality" value={newRestaurant.speciality} onChange={handleInputChange} placeholder="Especialidad" required />
        <input name="nearLandmark" value={newRestaurant.nearLandmark} onChange={handleInputChange} placeholder="Cerca de" required />
        <input name="stxAddress" value={newRestaurant.stxAddress} onChange={handleInputChange} placeholder="Dirección STX" required />
        <input name="sustainabilityScore" type="number" min="0" max="100" value={newRestaurant.sustainabilityScore} onChange={handleInputChange} placeholder="Puntuación de Sostenibilidad" required />
        <button type="submit">Agregar Restaurante</button>
      </form>
      <ul>
        {restaurants.map(restaurant => (
          <li key={restaurant._id}>
            <h3>{restaurant.name} {restaurant.verified ? '✅' : '❓'}</h3>
            <p>Cocina: {restaurant.cuisine}</p>
            <p>Dirección: {restaurant.address}</p>
            <p>Calificación: {restaurant.rating}/5</p>
            <p>Rango de precios: {restaurant.priceRange}</p>
            <p>Especialidad: {restaurant.speciality}</p>
            <p>Cerca de: {restaurant.nearLandmark}</p>
            <p>NFT Token ID: {restaurant.nftTokenId || 'Pendiente'}</p>
            <p>Dirección STX: {restaurant.stxAddress}</p>
            <p>Puntuación de Sostenibilidad: {restaurant.sustainabilityScore}/100</p>
            <p>Total de Reservas: {restaurant.totalBookings}</p>
            <p>Reservas con STX: {restaurant.stxBookings}</p>
            <p>Puntuación de Fraude: {restaurant.fraudScore}/100</p>
            <h4>Reseñas Verificadas:</h4>
            <ul>
              {restaurant.reviews && restaurant.reviews.map((review, index) => (
                <li key={index}>
                  <p>{review.user} - {review.rating}/5 {review.verified ? '✅' : '❓'}</p>
                  <p>{review.comment}</p>
                  <p>Fecha: {new Date(review.date).toLocaleDateString()}</p>
                  <p>GPS: {review.gpsData.latitude}, {review.gpsData.longitude}</p>
                  {review.photoUrl && <img src={review.photoUrl} alt="Review" style={{maxWidth: '200px'}} />}
                </li>
              ))}
            </ul>
            <form onSubmit={handleReviewSubmit}>
              <input type="hidden" name="restaurantId" value={restaurant._id} onChange={handleReviewInputChange} />
              <textarea name="comment" value={newReview.comment} onChange={handleReviewInputChange} placeholder="Comentario" required />
              <input type="number" name="rating" min="1" max="5" value={newReview.rating} onChange={handleReviewInputChange} required />
              <input type="text" name="gpsLatitude" value={newReview.gpsLatitude} onChange={handleReviewInputChange} placeholder="Latitud GPS" required />
              <input type="text" name="gpsLongitude" value={newReview.gpsLongitude} onChange={handleReviewInputChange} placeholder="Longitud GPS" required />
              <input type="text" name="photoUrl" value={newReview.photoUrl} onChange={handleReviewInputChange} placeholder="URL de la foto" />
              <button type="submit">Agregar Reseña</button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantList;
