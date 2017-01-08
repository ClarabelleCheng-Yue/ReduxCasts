import React from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';

export default ({lat, lon}) => {
  const location = { lat, lng: lon };

  return (
    <GoogleMapLoader
      containerElement={ <div style={ { height: '100%' } } /> }
      googleMapElement={
        <GoogleMap 
          defaultZoom={10} 
          defaultCenter={location}>
          <Marker 
            position={location} 
            defaultAnimation={3} />
        </GoogleMap>
      }
    />
  );
}