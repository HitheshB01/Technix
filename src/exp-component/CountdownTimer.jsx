import React, { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const targetDate = new Date("2025-02-17T23:59:59"); // Ensure future date
      const difference = targetDate - now;

      // console.log("Time Difference:", difference); // Debugging

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft(); // Initial calculation
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer); // Clear interval on unmount
  }, []);

  return (
    <div className="flex justify-center space-x-4 mt-2">
      {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => {
        const value = Object.values(timeLeft)[index];
        return (
          <div key={label} className="text-center">
            <span className="text-3xl md:text-4xl font-bold text-dark-brown">
              {value}
            </span>
            <span className="block text-sm text-amber-700">{label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default CountdownTimer;
