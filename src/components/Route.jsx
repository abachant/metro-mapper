import React, { useState } from 'react';
import Stop from './Stop.jsx';

const Route = ({ stops }) => {
  console.log('text');
  return (
    <div>
      <ul className="route-list">
        {stops.map((stop) => <Stop key={stop} stopInfo={stop} />)}
      </ul>
    </div>
  );
};

export default Route;
