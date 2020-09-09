import React from 'react';
import PropTypes from 'prop-types';
import usePosition from './usePosition';

const GetLocation = ({watch, settings, setLat, setLon}) => {
    const {
    latitude,
    longitude,
    timestamp,
    accuracy,
    error,
  } = usePosition(watch, settings);

//   const loader = !latitude && !error ? (
//     <>
//       <div>Trying to fetch location...</div>
//       <br/>
//     </>
//   ) : null;
console.log(latitude, longitude);
setLat(latitude)
setLon(longitude)
  return (
    <>
      {/* {loader} */}
      <code>
          Your Current Location: <br/>
        latitude: {latitude}<br/>
        longitude: {longitude}<br/>
        {/* error: {error} */}
      </code>
    </>
  );
};

GetLocation.propTypes = {
  watch: PropTypes.bool,
  settings: PropTypes.object,
};

export default GetLocation;