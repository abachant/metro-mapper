import React from 'react';
import System from './System.jsx';
import Map from './Map.jsx';
import StopForm from './StopForm.jsx';

const App = () => {
  console.log('test');
  return (
    <div>
      <StopForm />
      <h1>Metro Mapper</h1>
      <Map />
      <System />
    </div>
  );
};

export default App;
