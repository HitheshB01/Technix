import React from 'react';
import { motion } from 'framer-motion';
import MagicButton from './MagicButton';

const HeroSection = () => {
  return (
    <div className="relative h-screen bg-night-sky overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0">
        {/* Hogwarts Silhouette */}
        <img
          src="/assets/images/hogwarts-silhouette.png"
          alt="Hogwarts"
          className="absolute bottom-0 w-full h-auto opacity-50"
        />
        {/* Stars */}
        <div className="absolute inset-0 bg-star-pattern animate-twinkle"></div>
        {/* Moving Clouds */}
        <div className="absolute inset-0 bg-cloud-pattern animate-clouds"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        {/* Fest Name */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-harryp text-golden mb-4"
        >
          Technix 6.0
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-2xl text-golden mb-8"
        >
          Unleash the Magic of Code & Wizardry!
        </motion.p>

        {/* CTA Button */}
        <MagicButton />
      </div>
    </div>
  );
};

export default HeroSection;