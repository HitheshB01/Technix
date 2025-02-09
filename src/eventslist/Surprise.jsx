import React from 'react';
import { motion } from 'framer-motion';
import logo from '../logos/surprise.png';

const Surprise = () => {
  const eventData = {
    eventName: 'Azkabans Breakout',
    subtitle: 'Surprise Event',
    logo: logo,
    tagline: 'The best surprise is Yet to come',
    description:
      'As the Triwizard Tournament challenged only the boldest wizards, this event will test your problem-solving and teamwork skills.',
    rules: [
      'Surprise Event.',
      'Members per team: 4.',
      'Event consists of 2 rounds.',
      'Your adventure begins on time—don’t be late!',
      'Every instruction matters; one wrong step could cost you the game.',
      'Each stage will unveil surprises on the spot—expect the unexpected!'
    ],
    fees: '₹250 per team',
    date: 'October 31, 2023',
    time: '6:00 PM',
    venue: 'Great Hall, Hogwarts',
    facultyCoordinator: {
      name: 'Prof. Dwarakanath G V',
      image: '/assets/faculty-coordinator.jpg',
    },
    eventCoordinators: [
      {
        name: 'pramod',
        image: '/assets/event-coordinator1.jpg',
        contact: '+91 8660187826',
      },
      {
        name: 'smitha raj ',
        image: '/assets/event-coordinator2.jpg',
        contact: '+91 9008929792',
      },
    ],
  };

  return (
    <div className="bg-night-sky min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative h-96 flex flex-col justify-center items-center text-center bg-gradient-to-r from-red-800 to-red-500"
      >
        <img src={eventData.logo} alt="Event Logo" className="w-24 h-24 mb-4 animate-float" />
        <h1 className="text-5xl font-harryp text-golden glow">{eventData.eventName}</h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl text-white mt-2"
        >
          {eventData.tagline}
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-parchment bg-cover p-8 rounded-lg shadow-lg mx-4 my-8"
      >
        <h3 className="text-2xl font-harryp text-golden mb-4">Rules</h3>
        <ul className="list-disc list-inside text-dark-brown">
          {eventData.rules.map((rule, index) => (
            <li key={index} className="mb-2">{rule}</li>
          ))}
        </ul>
        <h3 className="text-2xl font-harryp text-golden mt-6 mb-4">Registration Fees</h3>
        <p className="text-dark-brown">{eventData.fees}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center my-8"
      >
        <motion.a
          href="https://docs.google.com/forms/d/e/1FAIpQLScRLYnwja2cB7sGavVbTrqc237pjIH8qGrw_pqePsql-n39Ig/viewform?usp=dialog" // Update with actual registration link
          whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(255, 215, 0, 0.8)' }}
          className="bg-golden text-night-sky px-8 py-4 rounded-lg text-xl font-harryp relative overflow-hidden border-2 border-yellow-500 shadow-lg hover:shadow-yellow-500 transition duration-300"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-golden opacity-20 animate-pulse"></span>
           Enroll Now 
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Surprise;
