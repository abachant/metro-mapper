import React from 'react';
import Stop from './Stop.jsx';
import StopForm from './StopForm.jsx';

const Route = () => {
  console.log('test');
  return (
    <div>
      <div>New Route</div>
      <ul className="route-list">
        <Stop stopName="Haymarket" />
        <Stop stopName="Fanieul Square" />
      </ul>
      <StopForm />
    </div>
  );
};

export default Route;
