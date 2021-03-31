import React, { useState } from 'react';

const StopForm = () => {
  const [stopName, setStopName] = useState();

  return (
    <div className="stop-form">
      <h5>Add a stop</h5>
      <form>
        <label htmlFor="stop-name">
          Stop Name:
          <input type="text" name="stop-name" value={stopName} onChange={(e) => setStopName(e.value)} />
        </label>
        <input type="button" value="Add Stop" onClick={() => console.log(stopName)} />
      </form>
    </div>
  );
};

export default StopForm;
