import React from 'react';

const key = '4fff3873910c61a841f80b62b0dfccf8';
const baseURL = `api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${key}`;

const weather = (props) => {

    fetch(baseURL)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));

    temperature = '';
    let celcius = props.temperature;
    let farenheight=(props.temperature *9)/5

}


export default weather; 
