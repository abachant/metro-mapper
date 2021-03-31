import React, { useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';
import L from 'leaflet';
import StopForm from './StopForm.jsx';
import { accessKey } from '../../accessToken.json';

const Map = () => {
  useEffect(() => {
    const primaryMap = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: accessKey,
    }).addTo(primaryMap);

    const popup = L.popup();

    const onMapClick = (e) => {
      // console.log(e.latlng)
      popup
        .setLatLng(e.latlng)
        // "You clicked the map at " + e.latlng.toString()
        // .setContent(ReactDOMServer.renderToString(<StopForm />))
        .setContent('<div>you just clicked</div>')
        .openOn(primaryMap);

      const marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(primaryMap);
      marker.bindPopup("<b>Hello world!</b><br>I am a popup.");
    };

    primaryMap.on('click', onMapClick);
  }, []);

  return (
    <div id="map" style={{ height: '500px' }} />
  );
};

export default Map;
