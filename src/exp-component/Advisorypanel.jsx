import React from "react";
import { motion } from "framer-motion";
import sri from '../coord_pic/hod.jpeg'
import shiv from '../coord_pic/shiv.jpeg'

// Faculty Data
const facultyMembers = [
  {
    name: "Dr. M Sridevi",
    role: "Head of Department",
    image: sri, // Replace with actual image URL
    house: "gryffindor", // Optional: Add house theme
  }, 
  {
    name: "Prof. Shivakumara T",
    role: "Fest Faculty coordinator",
    image: shiv, // Replace with actual image URL
    house: "gryffindor",
  },
  
];

// Faculty Card Component
const FacultyCard = ({ name, designation, role, image, house }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative p-6 bg-night-sky rounded-lg hover:shadow-lg transition-all"
    >
      {/* Floating Portrait */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="w-48 h-52 mx-auto mb-4 overflow-hidden border-2 border-golden rounded-lg"
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full  object-cover hover:scale-110 transition-transform"
        />
      </motion.div>

      {/* Name & Designation */}
      <h3 className="text-xl font-harryp text-golden text-center">{name}</h3>
      <p className="text-sm text-gray-300 text-center">{designation}</p>

      {/* Role */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="mt-4 p-2 bg-parchment rounded-lg text-center cursor-pointer"
      >
        <p className="text-dark-brown font-semibold">{role}</p>
      </motion.div>
    </motion.div>
  );
};

// Main Advisory Panel Component
const AdvisoryPanel = () => {
  return (
    <div className="min-h-screen bg-night-sky bg-pattern-stars py-12 px-4">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-harryp text-golden text-center mb-8">
          Advisory Panel
        </h2>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyMembers.map((member, index) => (
            <FacultyCard
              key={index}
              name={member.name}
              designation={member.designation}
              role={member.role}
              image={member.image}
              house={member.house}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvisoryPanel;
