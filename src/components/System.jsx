import React from 'react';
import Route from './Route.jsx';

const System = ({ stops, addStop }) => {
  console.log('test');
  return (
    <div>
      <h3>New Route</h3>
      <Route stops={stops} addStop={addStop} />
    </div>
  );
};

export default System;
