import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline} from 'react-leaflet';

import System from './System.jsx';
import Map from './Map.jsx';

const App = () => {
  const [stops, setStops] = useState([]);
  // const [newStop, setNewStop] = useState();
  // add new stop to end of the line
  const addStop = (newStop) => {
    setStops([...stops, newStop]);
  };

  // const renderMarkers

  return (
    <div>
      <h1>Metro Mapper</h1>
      <MapContainer style={{ height: '500px' }} center={[51.505, -0.09]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Map addStop={addStop}/>
        <Polyline pathOptions={{color: 'red'}} positions={stops} />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
        </Marker>
      </MapContainer>
      <System stops={stops} addStop={addStop} />
    </div>
  );
};

export default App;
