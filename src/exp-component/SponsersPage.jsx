import React from 'react';
import { motion } from 'framer-motion';

const SponsorsPage = () => {
  const sponsors = {
    platinum: [
      { name: 'Sponsor 1', logo: '/logos/sponsor1.png', description: 'Major supporter of Technix6.0' },
      { name: 'Sponsor 2', logo: '/logos/sponsor2.png', description: 'Key contributor to the fest' },
    ],
    gold: [
      { name: 'Sponsor 3', logo: '/logos/sponsor3.png', description: 'Valuable partner in magic and tech' },
      { name: 'Sponsor 4', logo: '/logos/sponsor4.png', description: 'Enhancing the fest experience' },
    ],
    silver: [
      { name: 'Sponsor 5', logo: '/logos/sponsor5.png', description: 'Supporting the magical journey' },
      { name: 'Sponsor 6', logo: '/logos/sponsor6.png', description: 'Contributing to the fest’s success' },
    ],
  };

  return (
    <div className="min-h-screen bg-night-sky text-golden font-harryp relative overflow-hidden">
      {/* Floating Golden Snitch */}
      <motion.img
        src="/icons/golden-snitch.png"
        alt="Golden Snitch"
        className="w-12 h-12 absolute top-20 left-10"
        animate={{ y: [0, 20, 0], rotate: [0, 360] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
      />

      {/* Floating Candle */}
      <motion.img
        src="/icons/candle.png"
        alt="Candle"
        className="w-8 h-8 absolute top-1/2 left-1/4"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

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

      {/* Sponsor Categories */}
      <div className="container mx-auto px-4 py-12">
        {/* Platinum Sponsors */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">🏆 The Order of the Phoenix</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sponsors.platinum.map((sponsor, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-lg shadow-lg text-center border-4 border-golden bg-golden bg-opacity-10"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-32 h-32 mx-auto mb-4 object-contain"
                />
                <h3 className="text-2xl font-bold mb-2">{sponsor.name}</h3>
                <p className="text-sm">{sponsor.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">🥈 The Triwizard Champions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsors.gold.map((sponsor, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-lg shadow-lg text-center border-2 border-silver bg-silver bg-opacity-10"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-32 h-32 mx-auto mb-4 object-contain"
                />
                <h3 className="text-2xl font-bold mb-2">{sponsor.name}</h3>
                <p className="text-sm">{sponsor.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">🥉 The Marauder’s Allies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sponsors.silver.map((sponsor, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-lg shadow-lg text-center border border-gray-500 bg-gray-500 bg-opacity-10"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-32 h-32 mx-auto mb-4 object-contain"
                />
                <h3 className="text-2xl font-bold mb-2">{sponsor.name}</h3>
                <p className="text-sm">{sponsor.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorsPage;