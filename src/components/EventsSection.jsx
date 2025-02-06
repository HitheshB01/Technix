import React from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';


const events = [
  {
    id: "coding",
    title: "Coding",
    description:
      "Solve coding challenges using C, C++, or Java and let your code cast the right spell.",
    logo: "https://cdn-icons-png.flaticon.com/512/201/201623.png", // Add logo URL
  },

  {
    id: "webDesign",
    title: "Web Designing",
    description:
      "Create magical websites using creative tools like Canva, Figma, Adobe Photoshop, and VSCode.",
    logo: "https://cdn-icons-png.flaticon.com/512/201/201623.png", // Add logo URL
  },
  {
    id: "itQuiz",
    title: "IT Quiz",
    description:
      "Test your IT knowledge in multiple rounds including MCQs, rapid-fire, and audio-visual challenges.",
    logo: "https://cdn-icons-png.flaticon.com/512/201/201623.png", // Add logo URL
  },
  {
    id: "itManager",
    title: "IT Manager",
    description:
      "Showcase your leadership skills with on-spot challenges and strategic IT decisions.",
    logo: "https://cdn-icons-png.flaticon.com/512/201/201623.png", // Add logo URL
  },

  {
    id: "bgmi",
    title: "BGMI",
    description:
      "Join the battleground in BGMI and compete with your team in an adrenaline-fueled gaming experience.",
    logo: "https://cdn-icons-png.flaticon.com/512/201/201623.png", // Add logo URL
  },
  {
    id: "photography",
    title: "photography",
    description:
      "Join the battleground in BGMI and compete with your team in an adrenaline-fueled gaming experience.",
    logo: "https://cdn-icons-png.flaticon.com/512/201/201623.png", // Add logo URL
  },

  {
    id: "treasureHunt",
    title: "Treasure Hunt",
    description:
      "Embark on a thrilling treasure hunt around campus and uncover hidden clues.",
    logo: "https://cdn-icons-png.flaticon.com/512/201/201623.png", // Add logo URL
  },

  {
    id: "surpriseEvent",
    title: "Surprise Event",
    description:
      "Expect the unexpected! Navigate through surprises that will challenge and delight you.",
    logo: "https://cdn-icons-png.flaticon.com/512/201/201623.png", // Add logo URL
  },
];

const EventSection = () => {
  // Animation variants for each event card
  const cardVariants = {
    offscreen: {
      y: 50, // Start 50px below the final position
      opacity: 0, // Start invisible
    },
    onscreen: {
      y: 0, // Move to the final position
      opacity: 1, // Fade in
      transition: {
        type: 'spring', // Use a spring animation
        stiffness: 100, // Adjust stiffness for bounce effect
        damping: 20, // Adjust damping for smoothness
        duration: 0.5, // Animation duration
      },
    },
  };

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 font-magic text-center mb-8">
          Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial="offscreen" // Initial animation state
              whileInView="onscreen" // Trigger animation when in view
              viewport={{ once: true, amount: 0.5 }} // Trigger once and when 50% of the card is visible
              variants={cardVariants} // Animation variants
            >
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-yellow-500">
                {/* Logo */}
                <div className="flex justify-center mb-4">
                  <img
                    src={event.logo}
                    alt={`${event.title} Logo`}
                    className="w-16 h-16 rounded-lg"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-yellow-500 font-magic text-center mb-4">
                  {event.title}
                </h3>

                {/* Description */}
                <p className="text-yellow-300 text-center mb-6">
                  {event.description}
                </p>

                {/* Button */}
                <div className="text-center">
                  <Link
                    to={`/events/${event.id}`}
                    className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg font-bold hover:bg-yellow-400 transition duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventSection;




// const EventSection = () => {
//   return (
//     <section className="py-12 px-4">
//       <div className="container mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 font-magic text-center mb-8">
//           Events
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {events.map((event) => (
//             <div
//               key={event.id}
//               className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-yellow-500"
//             >
//               {/* Logo */}
//               <div className="flex justify-center mb-4">
//                 <img
//                   src={event.logo}
//                   alt={`${event.title} Logo`}
//                   className="w-16 h-16 rounded-lg"
//                 />
//               </div>

//               {/* Title */}
//               <h3 className="text-xl md:text-2xl font-bold text-yellow-500 font-magic text-center mb-4">
//                 {event.title}
//               </h3>

//               {/* Description */}
//               <p className="text-yellow-300 text-center mb-6">
//                 {event.description}
//               </p>

//               {/* Button */}
//               <div className="text-center">
//                 <Link
//                   to={`/events/${event.id}`}
//                   className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg font-bold hover:bg-yellow-400 transition duration-300"
//                 >
//                   Learn More
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EventSection;
