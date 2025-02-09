import React from 'react';
import { motion } from 'framer-motion';

const EventCard = ({ event }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 215, 0, 0.8)' }}
      transition={{ duration: 0.3 }}
      className={`p-6 rounded-lg shadow-lg ${event.color} text-white relative overflow-hidden`}
    >
      {/* House Symbol - Enlarged and Positioned */}
      <div className="absolute top-0 right-0 h-full w-1/2 flex justify-center items-center opacity-20">
        <span className="text-[10rem]">{event.symbol}</span>
      </div>

      {/* Event Title */}
      <h2 className="text-2xl font-harryp mb-4 relative">{event.title}</h2>

      {/* Register Button */}
      <button className="mt-4 px-4 py-2 bg-golden text-black font-harryp rounded-lg hover:bg-golden-dark transition-all relative">
        Register Now
      </button>
    </motion.div>
  );
};

export default EventCard;
