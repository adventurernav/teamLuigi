import React, { useState, useEffect, Component } from 'react';
import Home from './home';

import GetLocation from '../apps/Location/location'

import NasaApp from '../apps/Nasa/Nasa'
import Weather from '../apps/Weather'
import Zomato from '../apps/Zomato/Zomato'

import {
    Route,
    Link,
    Switch
} from 'react-router-dom';

const Sidebar = () => {
    const [lat, setLat] = useState('39.96');
    const [lon, setLon] = useState('86.00');
    console.log(lon);
    return (
        <div className="sidebar">
            <div className="sidebar-list list-unstyled">
                <ul className="sidebar-list list-unstyled">

                    <GetLocation setLat={setLat} setLon={setLon} />
                    <li><Link to='/'>Home</Link> </li>
                    <li><Link to='/nasa'>NASA</Link> </li>
                    <li><Link to = '/weather'>Weather</Link> </li>
                    <li><Link to = '/zomato'>Zomato</Link> </li>


                </ul>
            </div>
            <div className="sidebar-route">

                <Switch>
                    <Route exact path='/home'><Home /></Route>
                    <Route exact path='/nasa'><NasaApp lon={lon} lat={lat}/></Route>
                    <Route exact path = '/weather'><Weather lon={lon} lat={lat} /></Route>
                    <Route exact path = '/zomato'><Zomato lon={lon} lat={lat} /></Route>

                </Switch>

            </div>
        </div>
    );

};

export default Sidebar;