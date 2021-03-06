import React, { useState } from 'react';

const StopForm = ({ addStop }) => {
  const [stopName, setStopName] = useState('');

  // Add new stop to route and clear form
  const submitNewStop = (e) => {
    e.preventDefault();
    // Verify new stop is valid string
    if (stopName !== '') {
      addStop(stopName);
      // Clear form for next submission
      setStopName('');
    }
  };

  return (
    <div className="stop-form">
      <h5>Add a stop</h5>
      <form>
        <label htmlFor="stop-name">
          Stop Name:
          <input type="text" name="stop-name" value={stopName} onChange={(e) => setStopName(e.target.value)} />
        </label>
        <input type="submit" value="Add Stop" onClick={submitNewStop} />
      </form>
    </div>
  );
};

export default StopForm;
