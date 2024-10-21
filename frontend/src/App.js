import React from 'react';
import './App.css';
import RestaurantList from './components/RestaurantList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Recomendador de Restaurantes</h1>
      </header>
      <main>
        <RestaurantList />
      </main>
    </div>
  );
}

export default App;
