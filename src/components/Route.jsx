import React, { useState } from 'react';
import Stop from './Stop.jsx';
import StopForm from './StopForm.jsx';

const Route = () => {
  const [stops, setStops] = useState(['Fanieul Square', 'Haymarket Square']);

  // add new stop to end of the line
  const addStop = (newStop) => {
    setStops([...stops, newStop]);
  };

  return (
    <div>
      <div>New Route</div>
      <ul className="route-list">
        {stops.map((stop) => <Stop key={stop} stopName={stop} />)}
      </ul>
      <StopForm addStop={addStop} />
    </div>
  );
};

export default Route;
