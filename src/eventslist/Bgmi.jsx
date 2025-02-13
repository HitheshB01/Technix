import React from 'react';
import { motion } from 'framer-motion';
import logo from '../logos/Bgmi.png';
import santu from '../coord_pic/santu.jpeg';
import kiran from '../coord_pic/kiran.jpeg';
import gvd from '../coord_pic/gvd.png';

const Bgmi = () => {
  // Event Data
  const eventData = {
    eventName: 'Quidditch Of Consoles',
    subtitle: 'BGMI',
    logo: logo, // Replace with your logo path
    tagline: 'Gear up, Log in, Take down',
    description: 'Mount your digital broomsticks and enter the battlefield where only the fiercest warriors shall soar to victory. With wands replaced by weapons, strategy and courage will determine the true champion of this enchanted showdown!',
    rules: [
      'Members per team: 4.',
      'Event consists of 2 rounds.',
      'No external help allowed.',
      'Any foul play or cheating, including aim bot, game client modifications, and exploiting bugs or glitches, will result in immediate disqualification.',
      'Only iOS and Android mobile phones are allowed; emulators and tablets are strictly prohibited.',
      'Participants must be ready with their required accessories before joining the game.',
      'No Wi-Fi will be provided.',
      'Participants must bring their own chargers and headphones.',
      'Remote play is not allowed; all participants must be physically present.',
      'No arguments with the coordinators; the coordinator’s decision is final.',
      'Further instructions will be provided on the event day.'
    ],    
    fees: '₹350 per team',
    facultyCoordinator: {
      name: 'Mr. Dwarakanath G V',
      image: gvd, // Replace with your image path
    },
    eventCoordinators: [
      {
        name: 'Santosh G',
        image: santu, // Replace with your image path
        contact: '+91 86605 10372',
      },
      {
        name: 'Kiran',
        image: kiran, // Replace with your image path
        contact: '+91 86180 72614',
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
          className="w-48 h-48 mt-1 animate-float"
        />

        {/* Event Name */}
        <h1 className="text-5xl font-harryp text-golden glow">{eventData.eventName}</h1>

        {/* Subtitle */}
        <h2 className="text-3xl font-harryp text-white mt-2">{eventData.subtitle}</h2>

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

      {/* Prize and Fees Section */}
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
            <p className="text-dark-brown text-xl">₹2500</p>
          </motion.div> */}

          {/* Runner-Up Prize */}
          {/* <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-parchment p-6 rounded-lg shadow-lg text-center"
          >
            <h4 className="text-2xl font-harryp text-amber-700 mb-2">Runner-Up Prize</h4>
            <p className="text-dark-brown text-xl">₹1500</p>
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
          href="https://docs.google.com/forms/d/e/1FAIpQLSe62-z9ynoMCKW_eXBiHRNmp3euVi9-P2-TMH_fmw3iQwN1aA/viewform?usp=header"
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

export default Bgmi;