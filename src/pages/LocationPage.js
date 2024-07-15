import React from 'react';
import './LocationPage.css';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '400px',
};

export const LocationPage = (props) => {
  return (
    <div className="location">
      <h2>Our Location</h2>
      <div style={mapStyles}>
        <Map
          google={props.google}
          zoom={14}
          initialCenter={{
            lat: 12.9667, // Latitude of the location
            lng: 77.5667, // Longitude of the location
          }}
        >
          <Marker position={{ lat: 12.9667, lng: 77.5667 }} />
        </Map>
      </div>
      <p>Bangalore, Kundanahalli Gate</p>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'YOUR_GOOGLE_MAPS_API_KEY_HERE', // Replace with your Google Maps API key
})(LocationPage);
