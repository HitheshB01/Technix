import React from "react";
import { motion } from "framer-motion";

import pramod from "../coord_pic/pramod.jpeg";
import siddd from "../coord_pic/siddd.jpeg";
import santuu from "../coord_pic/santuu.jpeg";

const StudentCommittee = () => {
  return (
    <section className="py-12 bg-gray-800">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-wrap justify-center gap-1">
          {/* Gaurang */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gray-800 rounded-lg shadow-md overflow-hidden p-4 text-center w-27"
          >
            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-yellow-500 relative">
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={pramod}
                alt="Gaurang"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-harryp text-yellow-500 mt-2">Pramod</h3>
          </motion.div>

          {/* Sinchana */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gray-800 rounded-lg shadow-md overflow-hidden p-4 text-center w-27"
          >
            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-yellow-500 relative">
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={santuu}
                alt="Sinchana"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-harryp text-yellow-500 mt-2">Santu</h3>
          </motion.div>

          {/* Ajay */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gray-800 rounded-lg shadow-md overflow-hidden p-4 text-center w-27"
          >
            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-yellow-500 relative">
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={siddd}
                alt="Ajay"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-harryp text-yellow-500 mt-2">Sid</h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StudentCommittee;