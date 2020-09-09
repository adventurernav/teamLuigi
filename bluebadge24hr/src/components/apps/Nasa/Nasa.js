import React, {useState,useEffect} from "react";
// import NasaResults from './NasaResults'

const key = 'c0WvapUXtCPs5n1w69vU4hJBMmz3xR8yR7h9SFct';

const NasaApp = (props) => {
    let baseUrl = `https://api.nasa.gov/planetary/earth/imagery?lon=${props.lon}&lat=${props.lat}&api_key=${key}`
    console.log(props)

    const fetchResults= () => {
        fetch(baseUrl)
        .then(res=>{
            console.log(res);
            return res.json()
        })
        .then(data=>console.log(data))
        .catch(err => console.log(err))
    }
fetchResults();
    // useEffect(()=>{
    //     fetchResults()
    // },[])
    return (
        <div> 
            {/* <NasaResults /> */}
        </div>
    )
}

export default NasaApp;
