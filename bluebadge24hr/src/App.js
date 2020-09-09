
import React, { useState, useEffect, Component } from 'react';
import Home from './components/site/home'
import Sidebar from './components/site/sidebar';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        
        <Sidebar />
        <Home />
      </BrowserRouter>

    </div>
  );
}


export default App;
