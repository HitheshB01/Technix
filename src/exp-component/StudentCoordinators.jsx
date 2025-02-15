import React from "react";
import { motion } from "framer-motion";
import hit from "../coord_pic/hithu.jpeg";
import shreya from "../coord_pic/shreya.jpeg";

const StudentCoordinators = () => {
  return (
    <section className="py-12 bg-night-sky bg-opacity-90">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-harryp text-golden text-center mb-8">
          Student Coordinators
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Hithesh */}
          <motion.div
            whileHover={{ y: -10, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative bg-parchment rounded-lg shadow-lg overflow-hidden p-6 text-center"
          >
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-golden relative">
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={hit}
                alt="Hithesh"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-golden opacity-0 hover:opacity-20 transition-opacity"></div>
            </div>
            <h3 className="text-2xl font-harryp text-amber-600 mt-4">Hithesh</h3>
            <p className="text-dark-brown italic">Head Coordinator</p>
            <p className="text-sm text-dark-brown mt-2">
              Contact: <a href="tel:9901767545" className="font-bold text-blue-500 underline">9901767545</a>
            </p>
          </motion.div>
          
          {/* Shreya */}
          <motion.div
            whileHover={{ y: -10, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative bg-parchment rounded-lg shadow-lg overflow-hidden p-6 text-center"
          >
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-golden relative">
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={shreya}
                alt="Shreya"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-golden opacity-0 hover:opacity-20 transition-opacity"></div>
            </div>
            <h3 className="text-2xl font-harryp text-amber-600 mt-4">Shreya</h3>
            <p className="text-dark-brown italic">Deputy Coordinator</p>
            <p className="text-sm text-dark-brown mt-2">
              Contact: <a href="tel:8762635749" className="font-bold text-blue-500 underline">8762635749</a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StudentCoordinators;
