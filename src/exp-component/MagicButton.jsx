import React from 'react';
import { motion } from 'framer-motion';

const MagicButton = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(255, 215, 0, 0.8)' }}
      whileTap={{ scale: 0.9 }}
      className="px-8 py-4 bg-golden text-night-sky font-harryp text-2xl rounded-lg hover:bg-golden-dark transition-all relative"
    >
      Broucher
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-lg bg-golden opacity-0 hover:opacity-20 transition-opacity"></div>
    </motion.button>
  );
};

export default MagicButton;