import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker } from 'react-leaflet';

import System from './System.jsx';
import Map from './Map.jsx';
import StopForm from './StopForm.jsx';

const App = () => {
  const [stops, setStops] = useState([]);
  const [newStop, setNewStop] = useState([]);
  // add new stop to end of the line
  const addStop = (stop) => {
    setStops([...stops, stop]);
  };

  const renderNewStop = () => {
    if (newStop.length > 0) {
      return (
        <Marker position={newStop}>
          <Popup>
            <StopForm addStop={addStop} newStop={newStop} setNewStop={setNewStop} />
          </Popup>
        </Marker>
      );
    }
  };

  const renderStops = () => {
    return stops.map((stop) => {
      return (
        <CircleMarker pathOptions={{ color: 'red', fillColor: 'white', fillOpacity: 1 }} radius="5" center={stop.latlng}>
          <Popup>
            <div>{stop.name}</div>
          </Popup>
        </CircleMarker>
      )
    })
  };

  return (
    <div>
      <h1>Metro Mapper</h1>
      <MapContainer style={{ height: '550px' }} center={[42.359994, -71.056562]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Map setNewStop={setNewStop} />
        <Polyline pathOptions={{ color: 'red' }} positions={stops.map(stop => stop.latlng)} />
        {renderNewStop()}
        {renderStops()}
      </MapContainer>
      {/* <System stops={stops} addStop={addStop} /> */}
    </div>
  );
};

export default App;
