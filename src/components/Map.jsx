import React, { useState } from 'react';
// import ReactDOMServer from 'react-dom/server';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents} from 'react-leaflet';
import L from 'leaflet';
import StopForm from './StopForm.jsx';
// import { accessKey } from '../../accessToken.json';

const Map = ({setNewStop}) => {
  // const [newStop, setNewStop] = useState();
  const map = useMapEvents({
    click: (e) => {
      e.originalEvent.preventDefault();
      setNewStop([e.latlng.lat, e.latlng.lng]);
    },
  });
  return null;
};

export default Map;
