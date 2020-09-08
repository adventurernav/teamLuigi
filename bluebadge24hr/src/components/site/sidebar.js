import React from 'react';
import Home from './home';
import NasaApp from '../apps/Nasa'




const sidebar =() => {
    return(
        <div className = "sidebar">
            <div className = "sidebar-list list-unstyled">
                <ul className="sidebar-list list-unstyled">

                <li><Link to = '/'>Home</Link> </li>
                <li><Link to = '/nasa'>NASA</Link> </li>

                </ul>
            </div>
            <div className="sidebar-route">
                <switch>
                    <Route exact path = '/home'><Home /></Route>
                    <Route exact path = '/nasa'><NasaApp /></Route>
                </switch>
            </div>
        </div>
    );

};

export default sidebar;