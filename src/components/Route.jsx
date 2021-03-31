import React, { useState } from 'react';
import Stop from './Stop.jsx';
import StopForm from './StopForm.jsx';

const Route = ({ stops, addStop }) => {
  console.log('text');
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
