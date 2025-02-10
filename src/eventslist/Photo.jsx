import React from 'react';
import { motion } from 'framer-motion';
import logo from '../logos/photo.png';
import sid from '../coord_pic/sid.jpeg';
import gvd from '../coord_pic/gvd.png';


const Photo = () => {
  const eventData = {
    eventName: 'The Snaps Of Secrets',
    subtitle: 'Photography',
    logo: logo,
    tagline: 'Create the moment, Create the magic',
    description: 'Capture moments as if crafting moving portraits for the wizarding world! Only those with a keen eye and a touch of magic can frame the essence of Technix 6.0 in a single shot.',
    rules: [
      'Only mobile devices are allowed (any model).',
      'All captures (photos/videos) must be taken within the campus.',
      'Photography: 2 hours per round, total 4 hours.',
      'Videography: 4 hours (including capturing and editing).',
      'Use of old photos/videos or internet-downloaded content will result in disqualification.',
      'Participants must provide before and after shots for photos.',
      'Capture date and time will be verified in the device settings.',
      'The quizmaster’s decision is final, and no disputes will be entertained.'
    ],
    fees: '₹150 per team',
    facultyCoordinator: {
      name:  'Mr. Dwarakanath G V',
      image: gvd,
    },
    eventCoordinators: [
      {
        name: 'Siddhanth',
        image: sid,
        contact: '+91 8660817826',
      },
      {
        name: 'Tejaswini',
        image: '/assets/event-coordinator2.jpg',
        contact: '+91 9008929792',
      },
    ],
  };

  return (
    <div className="bg-night-sky min-h-screen">
      <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        className="relative h-96 flex flex-col justify-center items-center text-center bg-gradient-to-r from-red-800 to-red-500">
        <img src={eventData.logo} alt="Event Logo" className="w-24 h-24 mb-4 animate-float" />
        <h1 className="text-5xl font-harryp text-golden glow">{eventData.eventName}</h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="text-xl text-white mt-2">
          {eventData.tagline}
        </motion.p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        className="bg-parchment bg-cover p-8 rounded-lg shadow-lg mx-4 my-8">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}
          className="text-dark-brown text-lg mb-4">
          {eventData.description}
        </motion.p>
        <h3 className="text-2xl font-harryp text-amber-700 mb-4">Rules</h3>
        <ul className="list-disc list-inside text-dark-brown">
          {eventData.rules.map((rule, index) => (
            <li key={index} className="mb-2">{rule}</li>
          ))}
        </ul>
        <h3 className="text-2xl font-harryp text-amber-700 mt-6 mb-4">Registration Fees</h3>
        <p className="text-dark-brown">{eventData.fees}</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        className="bg-parchment bg-cover p-8 rounded-lg shadow-lg mx-4 my-8">
        <div className="flex items-center space-x-4 mb-6">
          <img src={eventData.facultyCoordinator.image} alt={eventData.facultyCoordinator.name} className="w-16 h-16 rounded-full" />
          <div>
            <h4 className="text-xl font-harryp text-amber-700">{eventData.facultyCoordinator.name}</h4>
            <p className="text-dark-brown">Faculty Coordinator</p>
            <p className="text-dark-brown">{eventData.facultyCoordinator.contact}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {eventData.eventCoordinators.map((coordinator, index) => (
            <div key={index} className="flex items-center space-x-4">
              <img src={coordinator.image} alt={coordinator.name} className="w-16 h-16 rounded-full" />
              <div>
                <h4 className="text-xl font-harryp text-amber-700">{coordinator.name}</h4>
                <p className="text-dark-brown">Event Coordinator</p>
                <p className="text-dark-brown">{coordinator.contact}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex justify-center my-8">
        <motion.button whileHover={{ scale: 1.1 }}
          className="bg-golden text-night-sky px-8 py-4 rounded-lg text-xl font-harryp">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScSduz7PcvL2XvLIZl7VNOEINrO2DqLvElndyKG0mPrmzT0wQ/viewform?usp=dialog">
            Enroll Now
          </a>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Photo;
