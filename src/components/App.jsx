import React, { useState } from 'react';
import System from './System.jsx';
import Map from './Map.jsx';

const App = () => {
  const [stops, setStops] = useState(['Fanieul Square', 'Haymarket Square']);
  // add new stop to end of the line
  const addStop = (newStop) => {
    setStops([...stops, newStop]);
  };

  return (
    <div>
      <h1>Metro Mapper</h1>
      <Map />
      <System stops={stops} addStop={addStop} />
    </div>
  );
};

export default App;
