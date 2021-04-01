import React from 'react';

const Stop = ({ stopInfo }) => {
  return (
    <div className="route-stop">
      <span className="stop-icon">
        <svg height="20" width="20">
          <circle cx="10" cy="10" r="5" stroke="red" strokeWidth="5" fill="white" />
        </svg>
      </span>
      <span>{stopInfo.name}</span>
    </div>
  );
};

export default Stop;
