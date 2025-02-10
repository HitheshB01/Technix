import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-opacity-80 bg-night-sky"
    >
      <div className="container mx-auto px-4 py-3 flex justify-start items-center">
        {/* Logo */}
        <div className="text-golden font-harryp text-2xl">Technix 6.0</div>
      </div>
    </motion.nav>
  );
};

export default Navbar;