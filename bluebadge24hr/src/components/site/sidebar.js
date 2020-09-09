import React from 'react';
import Home from './home';
// import NasaApp from '../apps/Nasa'
import Weather from '../apps/Weather'
// import Zomato from '../apps/Zomato'
import {
    Route,
    Link, 
    Switch
} from 'react-router-dom';

const sidebar =(props) => {

    return(
        <div className = "sidebar">
            <div className = "sidebar-list list-unstyled">
                <ul className="sidebar-list list-unstyled">

                <li><Link to = '/'>Home</Link> </li>
                {/* <li><Link to = '/nasa'>NASA</Link> </li> */}
                <li><Link to = '/weather'>Weather</Link> </li>
                {/* <li><Link to = '/zomato'>Zomato</Link> </li> */}


                </ul>
            </div>
            <div className="sidebar-route">

                <Switch>
                    <Route exact path = '/home'><Home /></Route>
                    {/* <Route exact path = '/nasa'><NasaApp /></Route> */}
                    <Route exact path = '/weather'><Weather /></Route>
                    {/* <Route exact path = '/zomato'><Zomato /></Route> */}
                </Switch>

            </div>
        </div>
    );

};

export default sidebar;