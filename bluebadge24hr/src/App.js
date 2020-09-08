import React, { useState, useEffect} from 'react';
import Nasa from './components/apps/Nasa'
import GetLocation from './components/apps/Location'
import Sidebar from './components/site/sidebar';

import './App.css';





function App() {
  const [lat, setLat] = useState('39.96443557739258');
  const [lon, setLon] = useState('86.00927734375');


  return (
    <div className="App">
      <GetLocation setLat={setLat} setLon={setLon} />
      
      <Sidebar/>

    </div>
  );
}

export default App;
      