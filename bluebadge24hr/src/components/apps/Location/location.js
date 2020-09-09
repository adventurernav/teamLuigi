import React from 'react';



import PropTypes from 'prop-types';
import usePosition from './usePosition';

const GetLocation = ({watch, settings, setLat, setLon}) => {
    const {latitude, longitude} = usePosition(watch, settings);

// console.log(latitude, longitude);
if (latitude){
  setLat(latitude)
}
if (longitude){
  setLon(longitude)
}

  return (
    <>
      {/* <code>
          Your Current Location: <br/>
        latitude: {latitude}<br/>
        longitude: {longitude}<br/>
        error: {error}
      </code> */}
    </>
  );
};

GetLocation.propTypes = {
  watch: PropTypes.bool,
  settings: PropTypes.object,
};




export default GetLocation;