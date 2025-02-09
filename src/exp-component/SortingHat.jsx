import React, { useState } from 'react';

const SortingHat = () => {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('Discover Your House!');
    // Add sorting logic here
  };

  return (
    <div className="mt-8 cursor-pointer" onClick={handleClick}>
      <img
        src="/assets/images/sorting-hat.png"
        alt="Sorting Hat"
        className="w-24 hover:animate-wiggle"
      />
      {message && <p className="text-golden-parchment mt-2">{message}</p>}
    </div>
  );
};

export default SortingHat;