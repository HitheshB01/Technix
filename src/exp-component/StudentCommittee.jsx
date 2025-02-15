import React from "react";
import { motion } from "framer-motion";
import ajay from "../coord_pic/ajay.jpeg";
import sinchana from "../coord_pic/sinchana.jpeg";
import gaurang from "../coord_pic/gau.jpeg";

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
                src={gaurang}
                alt="Gaurang"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-harryp text-yellow-500 mt-2">Gaurang</h3>
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
                src={sinchana}
                alt="Sinchana"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-harryp text-yellow-500 mt-2">Sinchana</h3>
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
                src={ajay}
                alt="Ajay"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-harryp text-yellow-500 mt-2">Ajay</h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StudentCommittee;