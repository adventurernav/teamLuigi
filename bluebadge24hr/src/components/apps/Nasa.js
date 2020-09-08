import React, {useState} from "react";


const key = 'c0WvapUXtCPs5n1w69vU4hJBMmz3xR8yR7h9SFct';


const NasaApp = (props) => {
    let baseUrl = `https://api.nasa.gov/planetary/earth/imagery?lon=${props.lon}?${key}`
    return (
        <div> 
            <h1> this is the NASA app</h1>
        </div>
    )
}

export default NasaApp;
