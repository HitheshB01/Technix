import React from 'react';
import { motion } from 'framer-motion';
import logo from '../logos/photo.png';

const Photo = () => {
  // Event Data
  const eventData = {
    eventName: 'The Snaps Of Secrets',
    subtitle: 'Photography',

    logo: logo, // Replace with your logo path
    tagline: 'Create the moment, Create the magic',
    description: 'Capture moments as if crafting moving portraits for the wizarding world! Only those with a keen eye and a touch of magic can frame the essence of Technix 6.0 in a single shot.',
    rules: [
      
        'Only mobile devices are allowed (any model).',
        'All captures (photos/videos) must be taken within the campus.',
        'Time Limits:',
        '  - Photography: 2 hours per round, total 4 hours.',
        '  - Videography: 4 hours (including capturing and editing).',
        'Use of old photos/videos or internet-downloaded content will result in disqualification.',
        'Participants must provide before and after shots for photos.',
        'Capture date and time will be verified in the device settings.',
        'The quizmaster’s decision is final, and no disputes will be entertained.'
     
      
    ],
    fees: '₹150 per team',
    date: 'October 31, 2023',
    time: '6:00 PM',
    venue: 'Great Hall, Hogwarts',
    facultyCoordinator: {
      name: 'Prof. Minerva McGonagall',
      image: '/assets/faculty-coordinator.jpg', // Replace with your image path
      contact: 'minerva.mcg@hogwarts.edu',
    },
    eventCoordinators: [
      {
        name: 'Siddhanth',
        image: '/assets/event-coordinator1.jpg', // Replace with your image path
        contact: '+91 8660817826',
      },
      {
        name: 'tejaswini',
        image: '/assets/event-coordinator2.jpg', // Replace with your image path
        contact: '+91 87654 32109',
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
        <h3 className="text-2xl font-harryp text-golden mb-4">Rules</h3>
        <ul className="list-disc list-inside text-dark-brown">
          {eventData.rules.map((rule, index) => (
            <li key={index} className="mb-2">
              {rule}
            </li>
          ))}
        </ul>

        {/* Registration Fees */}
        <h3 className="text-2xl font-harryp text-golden mt-6 mb-4">Registration Fees</h3>
        <p className="text-dark-brown">{eventData.fees}</p>
      </motion.div>

      {/* Coordinators Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-parchment bg-cover p-8 rounded-lg shadow-lg mx-4 my-8"
      >
        <h3 className="text-2xl font-harryp text-golden mb-6">Coordinators</h3>

        {/* Faculty Coordinator */}
        <div className="flex items-center space-x-4 mb-6">
          <img
            src={eventData.facultyCoordinator.image}
            alt={eventData.facultyCoordinator.name}
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h4 className="text-xl font-harryp text-golden">{eventData.facultyCoordinator.name}</h4>
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
                <h4 className="text-xl font-harryp text-golden">{coordinator.name}</h4>
                <p className="text-dark-brown">Event Coordinator</p>
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
                 href="https://docs.google.com/forms/d/e/1FAIpQLScSduz7PcvL2XvLIZl7VNOEINrO2DqLvElndyKG0mPrmzT0wQ/viewform?usp=dialog" // Update with actual registration link
                
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-golden opacity-20 animate-pulse"></span>
                             Enroll Now 
                  </motion.a>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Photo;
