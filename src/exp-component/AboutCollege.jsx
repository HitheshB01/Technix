import React from 'react';
import { motion } from 'framer-motion';

const AboutCollege = () => {
  return (
    <div className="min-h-screen bg-parchment bg-cover bg-center text-dark-brown">
      {/* Floating Candles */}
      <motion.img
        src="/icons/candle.png"
        alt="Candle"
        className="w-8 h-8 absolute top-1/4 left-1/4"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Hero Section
      <section className="relative h-screen flex flex-col justify-center items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-harryp text-golden mb-4"
        >
          Welcome to Technix 6.0 By BMSIT
        </motion.h1>
        <p className="text-xl max-w-2xl mx-auto">
          A Legacy of Knowledge & Innovation in the world of IT.
        </p>
      </section> */}

      {/* College Description Section */}
      <section className="py-16 px-4">
        <h2 className="text-4xl font-harryp text-golden text-center mb-8">
          About BMSIT
        </h2>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* College Picture */}
          <motion.img
            src="/images/bmsit-college.jpg" // Replace with your college image path
            alt="BMSIT College"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />

          {/* College Description */}
          <div className="w-full md:w-1/2">
            <p className="text-lg mb-4">
              BMS Institute of Technology (BMSIT) is a premier engineering college located in Bangalore, India. Established in 2002, BMSIT has been a beacon of excellence in technical education, fostering innovation and research.
            </p>
            <p className="text-lg mb-4">
              With state-of-the-art infrastructure, experienced faculty, and a vibrant student community, BMSIT is committed to nurturing future leaders in the field of technology.
            </p>
            <p className="text-lg">
              The college is affiliated with Visvesvaraya Technological University (VTU) and is accredited by the National Board of Accreditation (NBA).
            </p>
          </div>
        </div>
      </section>

      {/* Golden Snitch Scroll Indicator */}
      <motion.img
        src="/icons/golden-snitch.png"
        alt="Golden Snitch"
        className="w-12 h-12 absolute bottom-8 right-8"
        animate={{ y: [0, 20, 0], rotate: [0, 360] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
};

export default AboutCollege;