import React from 'react';

const FloatingBooks = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[1, 2, 3, 4, 5].map((book, index) => (
        <div
          key={index}
          className="absolute w-12 h-16 bg-golden rounded-lg animate-float"
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

export default FloatingBooks;