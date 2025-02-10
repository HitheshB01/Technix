import React from 'react';
import { motion } from 'framer-motion';
import logo from '../logos/quiz.png';
import ananya from '../coord_pic/ananya.jpeg';
import nikhila from '../coord_pic/nikhila.jpeg';
const Quiz = () => {
  // Event Data
  const eventData = {
    eventName: 'Spells, Scrolls & Syntax',
    subtitle: 'IT Quiz',

    logo: logo, // Replace with your logo path
    tagline: 'Test your brain , Calim your fame !',
    description: 'Only the wisest witches and wizards shall triumph in this test of magical knowledge and logic. With each question, a new spell is cast—will you conjure the right answers or be lost in the fog of confusion?',
    rules: [
      'IT Quiz.',
      'Members per team: 2.',
      'Event consists of 3 rounds.',
      'Use of mobile phones, smart devices, or any external reference material is strictly prohibited.',
      'The quiz will include multiple rounds such as MCQs, rapid-fire, and audio-visual rounds.',
      'The format and rules for each round will be explained before the quiz begins.',
      'In case of a tie, a tiebreaker round will be conducted.',
      'The quizmaster’s decision is final, and no disputes will be entertained.'
    ],
    fees: '₹250 per team',
    date: 'October 31, 2023',
    time: '6:00 PM',
    venue: 'Great Hall, Hogwarts',
    facultyCoordinator: {
      name: 'Prof. Dwarakanath G V',
      image: '/assets/faculty-coordinator.jpg', // Replace with your image path
      
    },
    eventCoordinators: [
      {
        name: 'Ananya',
        image: ananya, // Replace with your image path
        contact: '+91 9880231462',
      },
      {
        name: 'Nikhila',
        image: nikhila, // Replace with your image path
        contact: '+91 8904291356',
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
        <h3 className="text-2xl font-harryp text-amber-700 mb-6">Coordinators</h3>

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
  <motion.a
    href="https://docs.google.com/forms/d/e/1FAIpQLSfbVAqw2QJ40Lpb_l5JOBK7BWZgxoY2Of1wxapoLFcr69oZWw/viewform?usp=dialog"
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

export default Quiz;
