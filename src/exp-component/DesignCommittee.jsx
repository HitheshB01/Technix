import React from "react";
import { motion } from "framer-motion";
import hit from "../coord_pic/hithu.jpeg";
import shreya from "../coord_pic/shreya.jpeg";
import ajay from "../coord_pic/ajay.jpeg";
import sinchana from "../coord_pic/sinchana.jpeg";
import gaurang from "../coord_pic/gau.jpeg";
// import thirdPerson from "../coord_pic/third.jpeg";

const DesignCommittee = () => {
  return (
    <section className="py-12 bg-night-sky bg-opacity-90">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-harryp text-golden text-center mb-8">
          Decor & Design Committee
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Hithesh */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative bg-parchment rounded-lg shadow-md overflow-hidden p-3 text-center"
          >
            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-golden relative">
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={gaurang}
                alt="Hithesh"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-golden opacity-0 hover:opacity-20 transition-opacity"></div>
            </div>
            <h3 className="text-lg font-harryp text-amber-600 mt-2">Gaurang</h3>
            {/* <p className="text-dark-brown italic mx-10">Head Designer</p>
            <p className="text-xs text-dark-brown mt-1">
              Contact: <a href="tel:9901767545" className="font-bold text-blue-500 underline">9901767545</a>
            </p> */}
          </motion.div>
          
          {/* Shreya */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative bg-parchment rounded-lg shadow-md overflow-hidden p-3 text-center"
          >
            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-golden relative">
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={sinchana}
                alt="Shreya"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-golden opacity-0 hover:opacity-20 transition-opacity"></div>
            </div>
            <h3 className="text-lg font-harryp text-amber-600 mt-2">sinchana</h3>
            {/* <p className="text-dark-brown italic">Deputy Designer</p>
            <p className="text-xs text-dark-brown mt-1">
              Contact: <a href="tel:8762635749" className="font-bold text-blue-500 underline">8762635749</a>
            </p> */}
          </motion.div>
          
          {/* Third Member - Centered */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative bg-parchment rounded-lg shadow-md overflow-hidden p-3 text-center col-span-2 lg:col-span-1 mx-auto"
          >
            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-golden relative">
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={ajay}
                alt="Third Member"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-golden opacity-0 hover:opacity-20 transition-opacity"></div>
            </div>
            <h3 className="text-lg font-harryp text-amber-600 mt-2">Ajay</h3>
            {/* <p className="text-dark-brown italic">Designer</p>
            <p className="text-xs text-dark-brown mt-1">
              Contact: <a href="tel:1234567890" className="font-bold text-blue-500 underline">1234567890</a>
            </p> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DesignCommittee;
