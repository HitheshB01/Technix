import React from 'react';
import { motion } from 'framer-motion';
import logo from '../logos/surprise.png';
import pramod from '../coord_pic/pramod.jpeg';
import smitha from '../coord_pic/Smitha .jpg';

const Surprise = () => {
  const eventData = {
    eventName: 'Azkabans Breakout',
    subtitle: 'Surprise Event',
    logo: logo,
    tagline: 'The best surprise is Yet to come',
    description:
      'Trapped within the enchanted walls of Azkaban, only the cleverest and most daring witches and wizards can escape. Every choice you make weaves your fate—one wrong move, and you may be lost in the depths forever!',
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
        image: pramod,
        contact: '+91 8660187826',
      },
      {
        name: 'smitha raj ',
        image: smitha,
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
        <h3 className="text-2xl font-harryp text-amber-700 mb-4">Rules</h3>
        <ul className="list-disc list-inside text-dark-brown">
          {eventData.rules.map((rule, index) => (
            <li key={index} className="mb-2">{rule}</li>
          ))}
        </ul>
        <h3 className="text-2xl font-harryp text-amber-700 mt-6 mb-4">Registration Fees</h3>
        <p className="text-dark-brown">{eventData.fees}</p>
      </motion.div>

      {/* Coordinators Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-parchment bg-cover p-8 rounded-lg shadow-lg mx-4 my-8"
            >
      
              {/* Faculty Coordinator */}
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={eventData.facultyCoordinator.image}
                  alt={eventData.facultyCoordinator.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h4 className="text-xl font-harryp text-amber-700">{eventData.facultyCoordinator.name}</h4>
                  <p className="text-dark-brown">Faculty Coordinator</p>
                  <p className="text-dark-brown">{eventData.facultyCoordinator.contact}</p>
                </div>
              </div>
      
              {/* Event Coordinators */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {eventData.eventCoordinators.map((coordinator, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <img
                      src={coordinator.image}
                      alt={coordinator.name}
                      className="w-16 h-16 rounded-full"
                    />
                    <div>
                      <h4 className="text-xl font-harryp text-amber-700">{coordinator.name}</h4>
                      <p className="text-dark-brown">{coordinator.contact}</p>
                    </div>
                  </div>
                ))}
              </div>
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
