import React from 'react';
import { motion } from 'framer-motion';

const EventSchedule = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-8 bg-parchment bg-cover rounded-lg shadow-lg text-center"
    >
      {/* Table Header */}
      <h2 className="text-3xl font-harryp text-golden mb-6">
        Technix6.0 - The Grand Wizarding Event Schedule
      </h2>

      {/* Notice */}
      <p className="text-xl text-gray-700 font-semibold">
        📜 The official event schedule will be uploaded on <span className="text-golden">11-02-2025</span>. Stay tuned, wizards! 🧙‍♂️✨
      </p>
    </motion.div>
  );
};

export default EventSchedule;
