import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';

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

  const renderMarker = () => {
    if (newStop.length > 1) {
      return (
        <Marker position={newStop}>
          <Popup>
            <StopForm addStop={addStop} newStop={newStop} setNewStop={setNewStop}/>
          </Popup>
        </Marker>
      );
    }
  };

  // const

  return (
    <div>
      <h1>Metro Mapper</h1>
      <MapContainer style={{ height: '500px' }} center={[51.505, -0.09]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Map setNewStop={setNewStop} />
        <Polyline pathOptions={{ color: 'red' }} positions={stops.map(stop=>stop.latlng)} />
        {renderMarker()}
      </MapContainer>
      {/* <System stops={stops} addStop={addStop} /> */}
    </div>
  );
};

export default App;
