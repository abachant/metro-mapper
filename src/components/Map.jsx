import React, { useEffect } from 'react';
import L from 'leaflet';
import { accessKey } from '../../accessToken.json';

const Map = () => {
  useEffect(() => {
    const mymap = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: accessKey,
    }).addTo(mymap);
  }, []);

  return (
    <div id="map" style={{ height: '500px' }} />
  );
};

export default Map;
