import React from 'react';
import Route from './Route.jsx';
import RouteForm from './RouteForm.jsx';

const System = ({ stops, routes, currentRoute, setCurrentRoute, setRoutes}) => {
  return (
    <div>
      <h3>Current Route</h3>
      <h5>{currentRoute}</h5>
      <RouteForm setRoutes={setRoutes} routes={routes} setCurrentRoute={setCurrentRoute}/>
      <Route stops={stops} />

    </div>
  );
};

export default System;
