import React from 'react';

const Stop = ({stopName}) => {
  console.log('test');
  return (
    <li className="route-stop">
      <div>{stopName}</div>
    </li>
  );
};

export default Stop;
