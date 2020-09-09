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
    //     let farenheight=(temperature *9)/5;
    // }
    return(
        <div>
            <p>i compiled</p>
        </div>
    )
}



export default Weather; 
