import React, { useState, useEffect } from "react";
// import NasaResults from './NasaResults'


const NasaApp = (props) => {
    const [src, setSrc] = useState("");
    // let latitude = (props.lat).toFixed(2);
    const key = 'c0WvapUXtCPs5n1w69vU4hJBMmz3xR8yR7h9SFct';
    // let baseUrl = `https://api.nasa.gov/planetary/earth/imagery?lon=${props.lon}&lat=${props.lat}&api_key=${key}`
    let altUrl = `https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&api_key=DEMO_KEY`
    const fetchResults = () => {
        fetch(altUrl)
            .then(function (res) {
                // console.log(res);
                return res.blob()
            })
            .then(data => {
                var objectURL = URL.createObjectURL(data);
                // console.log(objectURL)
                setSrc(objectURL)
            })
    }
        fetchResults();
        // useEffect(()=>{
        //     fetchResults()
        // },[])
        return (
            <div>
                <h1>Here is a satellite image of your location:</h1>
                <hr/>
                <img style={{ height: '300px', padding: '10px' }} src={src} alt={'Please wait for your image to load...'} />
                {/* <NasaResults /> */}
            </div>
        )
    
}
export default NasaApp;
