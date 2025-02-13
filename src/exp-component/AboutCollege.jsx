import React from 'react';
import { motion } from 'framer-motion';
import clg from '../logos/clg.jpeg';

const AboutCollege = () => {
  return (
    <div className="min-h-screen bg-parchment bg-cover bg-center text-dark-brown">
      {/* Floating Candles */}
      {/* <motion.img
        src="/icons/candle.png"
        alt="Candle"
        className="w-8 h-8 absolute top-1/4 left-1/4"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      /> */}

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
        <h2 className="text-4xl font-harryp text-dark-brown text-center mb-8">
          About BMSIT&M
        </h2>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* College Picture */}
          <motion.img
            src={clg} // Replace with your college image path
            alt="BMSIT College"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />

          {/* College Description */}
          <div className="w-full md:w-1/2">
            <p className="text-lg mb-4">
            BMS Institutions trace their history back to 1946 when Late Sri B.M. Sreenivasaiah, a visionary philanthropist, founded BMS College of Engineering, the first private engineering college in India. Recognized for his contributions to education, he was honored with the title ‘Dharmaprakasha Rajakaryaprasakta’ by the Maharaja of Mysore.            </p>
            <p className="text-lg mb-4">
            His son, Sri B.S. Narayan, further expanded his legacy by transforming BMS College of Engineering into a top-tier institution. He also established the BMS Educational Trust (BMSET), founding institutions like BMS College of Law, BMS College for Women, and BMS Evening College of Engineering. Additionally, he initiated global collaborations, including programs with the Melton Foundation.            </p>
            <p className="text-lg">
            Today, BMS Institutions are managed by The Council of Trustees, appointed by Dr. B.S. Ragini Narayan, wife of Late Sri B.S. Narayan, who serves as the Chairperson, Donor Trustee, and Member Secretary of BMSET.            </p>
          </div>
        </div>
      </section>

      {/* Golden Snitch Scroll Indicator
      <motion.img
        src="/icons/golden-snitch.png"
        alt="Golden Snitch"
        className="w-12 h-12 absolute bottom-8 right-8"
        animate={{ y: [0, 20, 0], rotate: [0, 360] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
      /> */}
    </div>
  );
};

export default AboutCollege;