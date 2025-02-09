import React from 'react';
import logo from '../logos/golden.png';
const GoldenSnitch = () => {
  return (
    <div className="fixed bottom-8 right-8 animate-bounce">
      <img
        src={logo}
        alt="Golden Snitch"
        className="w-12 h-8"
      />
    </div>
  );
};

export default GoldenSnitch;