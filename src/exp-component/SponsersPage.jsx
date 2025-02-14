import React from 'react';
import { motion } from 'framer-motion';
import viva from '../logos/viva.png';
import tayi from '../logos/tayi.png';
import mias from '../logos/mias.png';
import shivu from '../logos/shivu.png';
import Ember from '../logos/Ember.png';

const SponsorsPage = () => {
  const sponsors = [
    { name: 'VIVATECH', logo: viva, description: 'Major supporter of Technix6.0' },
    { name: 'TAYI', logo: tayi, description: 'Key contributor to the fest' },
    { name: 'MIAS CAFE', logo: mias, description: 'Valuable partner in magic and tech' },
    { name: 'KERAMRUTH', logo: shivu, description: 'Appajith Ogranics Store' },
    { name: 'EMBERQUEST', logo: Ember, description: 'Appajith Ogranics Store' },



  ];

  return (
    <div className="min-h-screen bg-night-sky text-golden font-harryp relative overflow-hidden">
      {/* Floating Golden Snitch */}
      {/* <motion.img
        src="/icons/golden-snitch.png"
        alt="Golden Snitch"
        className="w-12 h-12 absolute top-20 left-10"
        animate={{ y: [0, 20, 0], rotate: [0, 360] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
      /> */}

      {/* Floating Candle */}
      {/* <motion.img
        src="/icons/candle.png"
        alt="Candle"
        className="w-8 h-8 absolute top-1/2 left-1/4"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      /> */}

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center pt-20 px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Our Esteemed Sponsors
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          A festival of magic and technology is incomplete without the support of our enchanting sponsors. We express our gratitude to these allies who help make Technix6.0 a reality!
        </p>
      </motion.div>

      {/* Sponsor Cards */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg shadow-lg text-center border-2 border-golden bg-golden bg-opacity-10"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="w-32 h-32 mx-auto mb-4 object-contain"
              />
              <h3 className="text-2xl font-bold mb-2">{sponsor.name}</h3>
              <p className="pb-2 text-base">{sponsor.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorsPage;