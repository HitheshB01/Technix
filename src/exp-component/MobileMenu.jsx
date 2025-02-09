import React from 'react';
import { motion } from 'framer-motion';

const MobileMenu = ({ isOpen, onClose, links }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -50 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-16 left-0 w-full h-screen bg-parchment bg-cover p-4 ${isOpen ? 'block' : 'hidden'}`}
    >
      <div className="flex flex-col space-y-4">
        {links.map((link, index) => (
          <motion.a
            key={index}
            href={link.path}
            whileHover={{ scale: 1.05 }}
            className="text-dark-brown text-xl flex items-center space-x-2"
          >
            {link.icon}
            <span>{link.label}</span>
          </motion.a>
        ))}
      </div>
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-dark-brown"
      >
        Close
      </button>
    </motion.div>
  );
};

export default MobileMenu;