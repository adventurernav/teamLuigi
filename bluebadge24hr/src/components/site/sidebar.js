import React from 'react';
import Home from './home';
import{
    Route,
    Link,
    Switch
}from 'react-router-dom';





const sidebar =() => {
    return(
        <div className = "sidebar">
            <div className = "sidebar-list list-unstyled">
                <ul className="sidebar-list list-unstyled">

                <li><Link to = '/'>Home</Link> </li>

                </ul>
            </div>
            <div className="sidebar-route">
                <switch>
                    <Route exact path = '/home'><Home /></Route>
                </switch>
            </div>
        </div>
    );

};

export default sidebar;