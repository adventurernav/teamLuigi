import React from 'react';
import getLocation from './components/site/location'
import Sidebar from './components/site/sidebar';
import './App.css';





function App() {
  return (
    <div className="App">
      <getLocation />
      <Sidebar/>
    </div>
  );
}

export default App;
      