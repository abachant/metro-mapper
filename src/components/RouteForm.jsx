import React, { useState } from 'react';

const RouteForm = ({ setCurrentRoute, routes, setRoutes }) => {
  const [newRoute, setNewRoute] = useState('');

  const submitNewRoute = (e) => {
    e.preventDefault();
    if (!routes.includes(newRoute) && newRoute) {
      setRoutes([...routes, newRoute]);
      setNewRoute('');
    }
  };

  return (
    <div className="route-form">
      <h5>Add a route</h5>
      <form>
        <label htmlFor="route-name">
          Route Name:
          <input type="text" name="route-name" value={newRoute} onChange={(e) => setNewRoute(e.target.value)} />
        </label>
        <input type="submit" value="Add Stop" onClick={submitNewRoute} />
      </form>
    </div>
  );
};

export default RouteForm;
