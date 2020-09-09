import React, { useState, useEffect } from "react";
// import NasaResults from './NasaResults'

const key = 'c0WvapUXtCPs5n1w69vU4hJBMmz3xR8yR7h9SFct';

const NasaApp = (props) => {
    const [src, setSrc] = useState("");
    // let latitude = (props.lat).toFixed(2);
    // console.log(props);
    // console.log(latitude);
    // let baseUrl = `https://api.nasa.gov/planetary/earth/imagery?lon=${x}&lat=${props.lat}&api_key=${key}`
    // console.log(baseUrl)
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
                <img style={{ height: '100px' }} src={src} alt={'Error'} />
                {/* <NasaResults /> */}
            </div>
        )
    
}
export default NasaApp;
