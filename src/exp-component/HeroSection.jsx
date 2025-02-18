import React from "react";
import { motion } from "framer-motion";
import MagicButton from "./MagicButton";
import CountdownTimer from "./CountdownTimer";

const HeroSection = () => {
  return (
    <div className="relative h-[125vh] bg-night-sky overflow-hidden flex flex-col justify-center items-center px-4">
      {/* Background Layers */}
      <div className="absolute inset-0">
        {/* Hogwarts Silhouette */}
        <img
          src="/assets/images/hogwarts-silhouette.png"
          alt="Hogwarts"
          className="absolute bottom-0 w-full h-auto opacity-50"
        />
        {/* Stars */}
        <div className="absolute inset-0 bg-star-pattern animate-twinkle"></div>
        {/* Moving Clouds */}
        <div className="absolute inset-0 bg-cloud-pattern animate-clouds"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-2xl">
        {/* Fest Name */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-harryp text-golden mb-3 md:mb-4"
        >
          Technix 6.0
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-2xl text-golden mb-6 md:mb-8"
        >
          Unleash the Magic of Code & Wizardry!
        </motion.p>

        {/* Prize Pool & Registration Fees */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1, type: "spring", stiffness: 100 }}
          className="bg-parchment p-4 md:p-6 rounded-lg shadow-lg border border-golden mb-4 md:mb-6 w-11/12 max-w-lg"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-2xl md:text-3xl font-harryp text-dark-brown"
          >
            Prize Pool & Registration Fees
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="text-xl md:text-2xl font-lumos text-amber-700 mt-1"
          >
            <span className="text-3xl md:text-4xl font-bold">Upto ₹27,000</span>
          </motion.p>
          <div className="grid grid-cols-2 gap-2 text-dark-brown text-sm md:text-lg mt-3">
            <div>
              <p className="font-bold">₹150</p>
              <ul className="list-disc pl-4">
                <li>IT Manager</li>
                <li>Coding</li>
                <li>Photography</li>
              </ul>
            </div>
            <div>
              <p className="font-bold">₹250</p>
              <ul className="list-disc pl-4">
                <li>IT Quiz</li>
                <li>Web Design</li>
                <li>Surprise Event</li>
              </ul>
            </div>
            <div className="col-span-2 text-center">
              <p className="font-bold">₹350</p>
              <ul className="list-disc pl-4 inline-block text-left">
                <li>Treasure Hunt</li>
                <li>BGMI</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Last Date Announcement */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1, type: "spring", stiffness: 100 }}
          className="bg-parchment p-4 md:p-5 rounded-lg shadow-lg border border-golden mb-4 md:mb-6 w-11/12 max-w-lg"
        >
          {/* On-Spot Registration Available */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-2xl md:text-3xl font-harryp text-dark-brown text-center"
          >
            On-Spot Registration Closed
            <span className="text-amber-700 text-lg md:text-xl">Thank You! </span>
          </motion.h2>


          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-2xl md:text-3xl font-harryp text-dark-brown text-center"
          >
            Online Registration Closed
            {/* <span className="text-amber-700 text-lg md:text-xl"> (*Except Treasure Hunt)</span> */}
          </motion.h2>

          {/* Timer for Online Registration */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="text-center mt-2"
          >
            <p className="text-lg md:text-xl font-lumos text-amber-700">
              Online Registration Closes In:
            </p>
            <CountdownTimer />
            <p className="text-sm md:text-lg font-lumos text-amber-700 mt-2">
              Last Date: 17th Feb, 11:59 PM
            </p>
          </motion.div> */}
        </motion.div>

        {/* CTA Button */}
        <MagicButton />
      </div>
    </div>
  );
};

export default HeroSection;
