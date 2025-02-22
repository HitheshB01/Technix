import React from 'react';
import { motion } from 'framer-motion';

const EventSchedule = () => {
  // Updated Event Data
  const events = [
    { time: '11:30 AM - 12:30 PM', session1: 'Photography & IT Manager', session2: 'Coding, Web Design, Quiz', session3: 'Gaming' },
    { time: '12:30 - 2:30 PM', session1: 'Photography & IT Manager (Ongoing)', session2: 'Surprise Event', session3: 'Gaming' },
    { time: '2:30 - 3:00 PM', session1: 'Break', session2: 'Break', session3: 'Break' },
    { time: '3:00 - 5:00 PM', session1: 'Photography & IT Manager (Ongoing)', session2: 'Coding, Web Design, Quiz', session3: 'Treasure Hunt' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4">
      {/* Table Title */}
      <motion.h1
        className="text-4xl font-bold text-yellow-500 font-magic text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Technix6.0 - Day 1 Schedule
      </motion.h1>

      {/* Registration & Inauguration */}
      <div className="text-center mb-6">
        <p className="text-xl font-bold text-yellow-500 font-magic">Registration: 7:30 - 09:30 AM</p>
        <p className="text-xl font-bold text-yellow-500 font-magic">Inauguration: 09:30 - 11:30 AM</p>
        <p className="text-sm text-gray-400">For a better experience, view the schedule on a desktop.</p>
      </div>

      {/* Table */}
      <motion.div
        className="bg-gray-800 rounded-lg shadow-lg p-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Desktop Table */}
        <div className="hidden md:block">
          <table className="w-full">
            <thead>
              <tr className="border-b border-yellow-500">
                <th className="text-left py-2 text-yellow-500 font-magic">Time</th>
                <th className="text-left py-2 text-yellow-500 font-magic">Session 1</th>
                <th className="text-left py-2 text-yellow-500 font-magic">Session 2</th>
                <th className="text-left py-2 text-yellow-500 font-magic">Session 3</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, index) => (
                <motion.tr
                  key={index}
                  className="border-b border-gray-700 hover:bg-gray-700 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <td className="py-4">{event.time}</td>
                  <td className="py-4">{event.session1}</td>
                  <td className="py-4">{event.session2}</td>
                  <td className="py-4">{event.session3}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Table (Card-Based) */}
        <div className="md:hidden space-y-4">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-yellow-500 font-magic">{event.time}</p>
              <p><strong>Session 1:</strong> {event.session1}</p>
              <p><strong>Session 2:</strong> {event.session2}</p>
              <p><strong>Session 3:</strong> {event.session3}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Note Points */}
      <motion.div
        className="bg-gray-800 rounded-lg shadow-lg p-6 mt-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-yellow-500 font-magic mb-4">Important Notes</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            <strong>Photography & IT Manager Participants:</strong> Those who participate in Photography & IT Manager can not participate in any other event.
          </li>
          <li>
            <strong>Gaming Participants:</strong> Those who participate in Gaming can also participate in Treasure Hunt, and vice versa.
          </li>
          <li>
            <strong>Coding, Web Design, & IT Quiz Participants:</strong> Those who participate in Coding, Web Design, or IT Quiz can also participate in the Surprise Event, and vice versa.
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default EventSchedule;