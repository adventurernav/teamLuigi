import React from 'react';

const baseURL = api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={'4fff3873910c61a841f80b62b0dfccf8'};
const key = '4fff3873910c61a841f80b62b0dfccf8';

const weather = () => {

    fetch(baseURL)
    .then(response => response.json())
    .then(data => console.log(data));
    .catch(err => console.log(err));

}



