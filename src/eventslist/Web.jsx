import React from 'react';
import { motion } from 'framer-motion';
import logo from '../logos/web.png';
import gau from '../coord_pic/gau.jpeg';
import varshini from '../coord_pic/varshini.jpeg';
import gvd from '../coord_pic/gvd.png';



const Web = () => {
  // Event Data
  const eventData = {
    logo:logo,
    eventName: ' CSSlytherin',
    subtitle: 'Web Designing',
    // logo: '/assets/event-logo.png', // Replace with your logo path
    tagline: 'Where creativity meets functionality',
    description: 'Weave your magic into the digital realm as you conjure spellbinding designs and bewitching interfaces. Only those with the precision of a potions master and the creativity of a wandmaker shall triumph in this enchanted test of web sorcery!',
    rules: [
      'Web Designing.',
      'Members per team: 2.',
      'Event consists of 3 rounds.',
      'Results will be determined based on cumulative scoring across all rounds.',
      'Participants must install the required software before the event.',
      'Allowed software includes Canva, Figma, Adobe Photoshop, Adobe Illustrator, and VSCode (other preferred editors must be approved by the coordinators).',
      'Some rounds will focus on HTML, CSS, and JavaScript; external code references are not allowed.',
      'Participants must bring their own devices and chargers.',
      'The event schedule must be followed strictly.'
    ],
    fees: '₹250 per team',
    date: 'October 31, 2023',
    time: '6:00 PM',
    venue: 'Great Hall, Hogwarts',
    facultyCoordinator: {
      name: 'Prof. Dwarakanath G V',
      image: gvd, // Replace with your image path
      
    },
    eventCoordinators: [
      {
        name: 'Gaurang',
        image: gau, // Replace with your image path
        contact: '+91 7339722954',
      },
      {
        name: 'Varshini',
        image: varshini, // Replace with your image path
        contact: '+91 9535907059',
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
                 href="https://docs.google.com/forms/d/e/1FAIpQLSdB7SbLOn_Qi2wZ_4eKaJibcI-mQkSzvaLLjZ-9X7vAwcRJ6Q/viewform?usp=dialog" // Update with actual registration link

                >
                  <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-golden opacity-20 animate-pulse"></span>
                             Enroll Now 
                  </motion.a>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Web;
