import React from 'react';
const Weather = (props) => {
    const key = '4fff3873910c61a841f80b62b0dfccf8';
    const baseURL = `api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.lon}&appid=${key}`;
    console.log(props.lat);
    console.log(props.lon);


console.log(baseURL);


    fetch(baseURL)
    .then(response => {
        console.log(response);
        response.json()
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));

    // const toggleTemp = (celcius) =>{
    //     let celcius = temperature;
    //     let fahrenheit=(temperature *9)/5;
    // }
    return(
        <div>
            <h1>The Weather APP</h1>
            <p>Find out the temperature of your location in fahrenheit or celcius.</p>
            <p></p>
            <button>Celcius/fahrenheit </button>
           
        </div>
    )
}



export default Weather; 
