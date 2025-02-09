import React from 'react';
import { motion } from 'framer-motion';

const StudentCoordinators = () => {
  const coordinators = [
    {
      name: 'Harry Potter',
      designation: 'Head Coordinator',
      house: 'Gryffindor',
      image: '/images/harry.jpg', // Replace with your image path
    },
    {
      name: 'Hermione Granger',
      designation: 'Deputy Coordinator',
      house: 'Ravenclaw',
      image: '/images/hermione.jpg', // Replace with your image path
    },
  ];

  const houseColors = {
    Gryffindor: 'bg-red-500',
    Ravenclaw: 'bg-blue-500',
    Hufflepuff: 'bg-yellow-500',
    Slytherin: 'bg-green-500',
  };

  return (
    <section className="py-12 bg-night-sky bg-opacity-90">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-harryp text-golden text-center mb-8">
          Student Coordinators
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coordinators.map((coordinator, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="relative bg-parchment rounded-lg shadow-lg overflow-hidden p-6 text-center"
            >
              {/* House Crest Badge */}
              <div
                className={`absolute top-4 right-4 w-10 h-10 rounded-full ${
                  houseColors[coordinator.house]
                } flex items-center justify-center text-white`}
              >
                {coordinator.house[0]} {/* Display the first letter of the house */}
              </div>

              {/* Profile Picture */}
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-golden relative">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={coordinator.image}
                  alt={coordinator.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-golden opacity-0 hover:opacity-20 transition-opacity"></div>
              </div>

              {/* Name & Designation */}
              <h3 className="text-2xl font-harryp text-golden mt-4">
                {coordinator.name}
              </h3>
              <p className="text-dark-brown italic">{coordinator.designation}</p>

              {/* House Affiliation */}
              <p className="text-sm text-dark-brown mt-2">
                House: <span className="font-bold">{coordinator.house}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentCoordinators;