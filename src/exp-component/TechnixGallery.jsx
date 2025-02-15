import React, { useState } from "react";
import { motion } from "framer-motion";
import ReactModal from "react-modal";
// import b from "../logos/Bgmi.png";
import a0 from "../memories/a0.jpeg";
import a1 from "../memories/a1.jpeg";
import a2 from "../memories/a2.jpeg";
import a3 from "../memories/a3.jpeg";
import a4 from "../memories/a4.jpeg";
import a5 from "../memories/a5.jpeg";   
import a6 from "../memories/a6.jpeg";
import a7 from "../memories/a7.jpeg";
import a8 from "../memories/a8.jpeg";
import a9 from "../memories/a9.jpeg";
// import b0 from "../memories/b0.jpeg";
import b1 from "../memories/b1.jpeg";
import b2 from "../memories/b2.jpeg";
import b3 from "../memories/b3.jpeg";
import b4 from "../memories/b4.jpeg";
import b5 from "../memories/b5.jpeg";

// Sample image data for each row
const row1Images = [
  { src: a1 },
  { src: a2 },
  { src: a3},
  { src: a9},
  { src: a5 },
];

const row2Images = [
  { src: a6 },
  { src: a7},
  { src: a8 },
  { src: a4 },
  { src: b5 },
];

const row3Images = [
  { src: b1 },
  { src: b2},
  { src:b3 },
  { src: b4 },
  { src: a0},
];

// Lightbox modal styles
ReactModal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    border: "2px solid #d4af37",
    borderRadius: "10px",
    padding: "20px",
    maxWidth: "90%",
    maxHeight: "90%",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};

const TechnixGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => setSelectedImage(image);
  const closeLightbox = () => setSelectedImage(null);

  // Function to render a single row
  const renderRow = (rowImages, topOffset) => (
    <motion.div
      className="flex space-x-4 absolute"
      style={{ top: topOffset }}
      animate={{ x: ["0%", "-100%"] }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {rowImages.map((image, index) => (
        <motion.div
          key={index}
          className="relative cursor-pointer group"
          whileHover={{ scale: 1.05, zIndex: 10 }}
          onClick={() => openLightbox(image)}
          style={{
            width: `${Math.random() * 200 + 100}px`, // Random width
            rotate: `${Math.random() * 10 - 5}deg`, // Random rotation
          }}
        >
          <img
            src={image.src}
            alt=""
            className="w-full h-auto rounded-lg border-2 border-d4af37 shadow-lg group-hover:shadow-golden"
          />
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-black to-gray-900">
      {/* First Row */}
      <motion.h1
              className="text-4xl font-bold text-yellow-500 font-magic text-center mb-8 pb-10"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Making Of Technix6.0
            </motion.h1>
      <div className="absolute top-12 w-full">
        {renderRow(row1Images, "8%")}
      </div>

      {/* Second Row */}
      <div className="absolute top-1/3 w-full">
        {renderRow(row2Images, "33%")}
      </div>

      {/* Third Row */}
      <div className="absolute top-2/3 w-full">
        {renderRow(row3Images, "66%")}
      </div>

      {/* Lightbox Modal */}
      <ReactModal
        isOpen={!!selectedImage}
        onRequestClose={closeLightbox}
        style={customStyles}
      >
        {selectedImage && (
          <div className="text-center">
            <img
              src={selectedImage.src}
              alt=""
              className="max-w-full max-h-[80vh] rounded-lg"
            />
          </div>
        )}
      </ReactModal>

      {/* Magical Wisps (Particle Effects) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-500 rounded-full"
            initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
            animate={{
              x: [0, Math.random() * window.innerWidth],
              y: [0, Math.random() * window.innerHeight],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TechnixGallery;