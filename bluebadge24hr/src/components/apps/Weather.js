import React from 'react';

const weather = (props) => {
    console.log(props.lat);
    console.log(props.lon);
    const key = '4fff3873910c61a841f80b62b0dfccf8';
    const baseURL = `api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.lon}&appid=${key}`;

console.log(baseURL);
    fetch(baseURL)
    .then(response => {
        // console.log(response);
        response.json()
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));

    // temperature = '';
    // let celcius = props.temperature;
    // let farenheight=(props.temperature *9)/5
    return(
        <div>
            <h1>Display Weather</h1>
        </div>
    )
}


export default weather; 
