
import React, { useState, useEffect, Component } from 'react';
import GetLocation from './components/apps/Location/location'
import Home from './components/site/home'
import Sidebar from './components/site/sidebar';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

function App() {
  const [lat, setLat] = useState('39.96');
  const [lon, setLon] = useState('86.00');
  

  return (
    <div className="App">
      <BrowserRouter>
        <GetLocation setLat={setLat} setLon={setLon} />
        <Sidebar lon={lon} lat={lat} />
        <Home />
      </BrowserRouter>

    </div>
  );
}


export default App;
