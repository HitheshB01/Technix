import React from 'react';

const FloatingCandles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[1, 2, 3, 4, 5].map((candle, index) => (
        <div
          key={index}
          className="absolute w-4 h-8 bg-golden rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 5 + 5}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default FloatingCandles;