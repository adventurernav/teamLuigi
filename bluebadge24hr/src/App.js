
import React, { useState, useEffect, Component} from 'react';
import Nasa from './components/apps/Nasa'
import GetLocation from './components/apps/Location'

import Sidebar from './components/site/sidebar';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';





class App extends Component {
  constructor(){
    super()
    // const [lat, setLat] = useState('39.96443557739258');
    // const [lon, setLon] = useState('86.00927734375');
   

  }
render(){

  return (
    <div className="App">
      <BrowserRouter>
      {/* <GetLocation setLat={setLat} setLon={setLon} /> */}
      <Sidebar/>
      </BrowserRouter>

    </div>
  );
}
}

export default App;
      