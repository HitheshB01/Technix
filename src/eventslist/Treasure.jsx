import React from 'react';
import { motion } from 'framer-motion';
import logo from '../logos/TreasureHunt.png';
import yogi from '../coord_pic/YSCphoto.JPG';
import vasudha from '../coord_pic/vasudha.jpeg';
import gvd from '../coord_pic/gvd.png';


const Treasure = () => {
  // Event Data
  const eventData = {
    eventName: 'The Golden Snitch',
    subtitle: 'Treasure Hunt',
    logo: logo, // Replace with your logo path
    tagline: ' Follow the clues, find the fortune',
    description: 'Just like the Seeker chasing the elusive Snitch, you must follow the clues, decode the riddles, and navigate through enchanted paths. Only the most cunning and swift will claim victory—will you catch the Snitch before time runs out?',
    rules: [
      'Treasure Hunt.',
      'Members per team: 5.',
      'Event consists of 3 rounds.',
      'Electronic gadgets are not allowed once the round begins.',
      'No skipping of clues.',
      'A specific coordinator will be assigned to each team.',
      'Communication with other teams or coordinators (except your assigned one) is not allowed once the round starts.',
      'The event takes place on campus only; going off-campus is not allowed.',
      'Entry into restricted areas is prohibited and will be clearly mentioned.'
    ],
    fees: '₹350 per team',
    date: 'October 31, 2023',
    time: '6:00 PM',
    venue: 'Great Hall, Hogwarts',
    facultyCoordinator: {
      name: 'Prof. Dwarakanath G V',
      image: gvd, // Replace with your image path
      
    },
    eventCoordinators: [
      {
        name: 'Vasudha ',
        image: vasudha, // Replace with your image path
        contact: '+91 6360617993',
      },
      {
        name: 'Yogin',
        image:yogi, // Replace with your image path
        contact: '+91 7411775033',
      },
    ],
  };

  return (
    <div className="bg-night-sky min-h-screen">
      {/* Event Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative h-96 flex flex-col justify-center items-center text-center bg-gradient-to-r from-red-800 to-red-500"
      >
        {/* Event Logo */}
        <img
          src={eventData.logo}
          alt="Event Logo"
          className="w-24 h-24 mb-4 animate-float"
        />

        {/* Event Name */}
        <h1 className="text-5xl font-harryp text-golden glow">{eventData.eventName}</h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl text-white mt-2"
        >
          {eventData.tagline}
        </motion.p>
      </motion.div>

      {/* Event Description */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-parchment bg-cover p-8 rounded-lg shadow-lg mx-4 my-8"
      >
        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-dark-brown text-lg mb-4"
        >
          {eventData.description}
        </motion.p>

        {/* Rules */}
        <h3 className="text-2xl font-harryp text-amber-700 mb-4">Rules</h3>
        <ul className="list-disc list-inside text-dark-brown">
          {eventData.rules.map((rule, index) => (
            <li key={index} className="mb-2">
              {rule}
            </li>
          ))}
        </ul>

       
      </motion.div>

      <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-red-800 to-red-500 p-8 rounded-lg shadow-lg mx-4 my-8"
            >
              {/* <h3 className="text-3xl font-harryp text-golden text-center mb-6">Prizes & Fees</h3> */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Registration Fees */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-parchment p-6 rounded-lg shadow-lg text-center"
                >
                  <h4 className="text-2xl font-harryp text-amber-700 mb-2">Registration Fees</h4>
                  <p className="text-dark-brown text-xl">₹350 per team</p>
                </motion.div>
      
                {/* Winner Prize */}
                {/* <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-parchment p-6 rounded-lg shadow-lg text-center"
                >
                  <h4 className="text-2xl font-harryp text-amber-700 mb-2">Winner Prize</h4>
                  <p className="text-dark-brown text-xl">₹2000</p>
                </motion.div> */}
      
                {/* Runner-Up Prize */}
                {/* <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-parchment p-6 rounded-lg shadow-lg text-center"
                >
                  <h4 className="text-2xl font-harryp text-amber-700 mb-2">Runner-Up Prize</h4>
                  <p className="text-dark-brown text-xl">₹1000</p>
                </motion.div> */}
              </div>
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

      {/* Registration Button */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center my-8"
      >
        <motion.button
          whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(255, 215, 0, 0.8)' }}
          className="bg-golden text-night-sky px-8 py-4 rounded-lg text-xl font-harryp glow-pulse"
        >
          <motion.a
                 href="https://docs.google.com/forms/d/e/1FAIpQLSfRpulajupjHnfl1pUF1jT6BLY-qVjE0mJ-f5Bp_1gjTHbegw/viewform?usp=dialog" // Update with actual registration link

                >
                  <span className="absolute inset-0 bg-gradient-to-r to-golden opacity-20 animate-pulse"></span>
                             Enroll Now 
                  </motion.a>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Treasure;
