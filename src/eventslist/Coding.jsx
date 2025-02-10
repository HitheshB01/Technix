import React from 'react';
import { motion } from 'framer-motion';
import logo from '../logos/coding.png';

const Coding = () => {
  // Event Data
  const eventData = {
    eventName: 'Code Of Phoenix',
    subtitle: 'Coding',

    logo:logo, // Replace with your logo path
    tagline: 'Code, Create, Captivate',
    description: 'Like the Phoenix rising from the ashes, only the most resilient coders will endure the trials ahead. This challenge will test your logic, speed, and spellbinding problem-solving skills—will your code soar or crumble into embers?',
    rules: [
      'Members per team: 1.',
      'Event consists of 3 rounds.',
      'Knowledge of C, C++, or Java is mandatory.',
      'Participants indulging in malpractice will be disqualified.',
      'The challenges for each round will be revealed a few minutes before it begins.',
      'Sheets of paper will be provided if necessary.',
      'PCs will be provided.',
      'No electronic gadgets are allowed.'
    ],    
    fees: '₹150 per team',
    date: 'October 31, 2023',
    time: '6:00 PM',
    venue: 'Great Hall, Hogwarts',
    facultyCoordinator: {
      name: 'Mr. Dwarakanath G V',
      image: '/assets/faculty-coordinator.jpg', // Replace with your image path
      contact: 'minerva.mcg@hogwarts.edu',
    },
    eventCoordinators: [
      {
        name: 'Nagesh',
        image: '/assets/event-coordinator1.jpg', // Replace with your image path
        contact: '+91 74831 58421',
      },
      {
        name: 'Abhishek Bhatt',
        image: '/assets/event-coordinator2.jpg', // Replace with your image path
        contact: '+91 70058 08873',
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

        {/* Registration Fees */}
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
<h3 className="text-2xl font-bold text-amber-700 mb-4">Faculty Coordinator</h3>
<div className="flex items-center space-x-4 mb-6">
  <img
    src={eventData.facultyCoordinator.image}
    alt={eventData.facultyCoordinator.name}
    className="w-16 h-16 rounded-full"
  />
  <div>
    <h4 className="text-xl font-harryp text-amber-700">{eventData.facultyCoordinator.name}</h4>
  </div>
</div>

{/* Event Coordinators */}
<h3 className="text-2xl font-bold text-amber-700 mb-4">Event Coordinators</h3>
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
  <motion.a
    href="https://docs.google.com/forms/d/e/1FAIpQLScq4u7KTSexAeHn3d9Af2o9IDXxh_-KyvvAFk8j_EsjST23Vw/viewform?usp=dialog"
    target="_blank"
    rel="noopener noreferrer"
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

export default Coding;
