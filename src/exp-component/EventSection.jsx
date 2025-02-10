


// import React from 'react';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import bgmi from '../logos/Bgmi.png';
// import coding from '../logos/coding.png';
// import quiz from '../logos/quiz.png';
// import web from '../logos/web.png';
// import TreasureHunt from '../logos/TreasureHunt.png';
// import surprise from '../logos/surprise.png';
// import photo from '../logos/photo.png';
// import ITManager from '../logos/ITManager.png';

// const events = [
//   { id: "webDesign", title: 'Quidditch Coding Challenge', color: 'bg-red-900', symbol: web },
//   { id: "coding", title: 'Dueling Algorithms', color: 'bg-red-900', symbol: coding },
//   { id: "itQuiz", title: 'Dark Arts Debugging', color: 'bg-green-900', symbol: quiz },
//   { id: "bgmi", title: 'Potions of Optimization', color: 'bg-green-900', symbol: bgmi },
//   { id: "treasureHunt", title: 'Riddle of the Code', color: 'bg-blue-900', symbol: TreasureHunt },
//   { id: "surpriseEvent", title: 'Enchanted Encryption', color: 'bg-blue-900', symbol: surprise },
//   { id: "photography", title: 'Herbology of Data', color: 'bg-yellow-900', symbol: photo },
//   { id: "itManager", title: 'Networking with Muggles', color: 'bg-yellow-900', symbol: ITManager },
// ];

// const EventSection = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-night-sky to-black p-8">
//       <h1 className="text-5xl font-serif text-golden text-center mb-12">Events at Technix 6.0</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         {events.map((event, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 215, 0, 0.5)' }}
//             transition={{ duration: 0.3 }}
//             className={`p-8 rounded-lg shadow-xl ${event.color} text-white relative overflow-hidden border-2 border-golden`}
//           >
//             {/* House Symbol - Enlarged and Positioned */}
//             <div className="absolute top-0 right-0 h-full w-1/2 flex justify-center items-center opacity-50">
//               <img
//                 src={`${event.symbol}`}
//                 alt={`${event.title} Symbol`}
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             {/* Event Title */}
//             <h2 className="text-2xl font-serif mb-2 relative z-10">{event.title}</h2>
//             {/* Subtitle (same as ID) */}
//             <p className="text-md text-gray-300 mb-6 relative z-10">#{event.id}</p>

//             {/* Register Button */}
//             <button 
//               onClick={() => navigate(`/events/${event.id}`)}
//               className="mt-4 px-6 py-3 bg-golden text-black font-serif rounded-lg hover:bg-golden-dark transition-all relative z-10"
//             >
//               Know More
//             </button>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EventSection;




import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import bgmi from '../logos/Bgmi.png';
import coding from '../logos/coding.png';
import quiz from '../logos/quiz.png';
import web from '../logos/web.png';
import TreasureHunt from '../logos/TreasureHunt.png';
import surprise from '../logos/surprise.png';
import photo from '../logos/photo.png';
import ITManager from '../logos/ITManager.png';

const events = [
  { id: "webDesign", title: 'CSSlytherin', color: 'bg-red-900', symbol: web },
  { id: "coding", title: 'Code Of Phoenix', color: 'bg-red-900', symbol: coding },
  { id: "itQuiz", title: 'Spells, Scrolls & Syntax', color: 'bg-green-900', symbol: quiz },
  { id: "bgmi", title: 'Quidditch Of Consoles', color: 'bg-green-900', symbol: bgmi },
  { id: "treasureHunt", title: 'The Golden Snitch', color: 'bg-blue-900', symbol: TreasureHunt },
  { id: "surpriseEvent", title: 'Azkabans Breakout', color: 'bg-blue-900', symbol: surprise },
  { id: "photography", title: 'The Daily Prophet', color: 'bg-yellow-900', symbol: photo },
  { id: "itManager", title: 'Quad-Wizard Gauntlet', color: 'bg-yellow-900', symbol: ITManager },
];

const EventSection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-night-sky to-black p-8">
      {/* Updated Font for Heading */}
      <h1 className="text-5xl font-harryp text-golden text-center mb-12">Events at Technix 6.0</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {events.map((event, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 215, 0, 0.5)' }}
            transition={{ duration: 0.3 }}
            className={`p-8 rounded-lg shadow-xl ${event.color} text-white relative overflow-hidden border-2 border-golden`}
          >
            {/* House Symbol - Enlarged and Positioned */}
            <div className="absolute top-0 right-0 h-full w-1/2 flex justify-center items-center opacity-50">
              <img
                src={`${event.symbol}`}
                alt={`${event.title} Symbol`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Updated Font for Event Title */}
            <h2 className="text-4xl font-harryp mb-2 relative z-10">{event.title}</h2>
            {/* Updated Font for Subtitle */}
            <p className="text-lg  text-gray-300 mb-6 relative z-10">#{event.id}</p>

            {/* Register Button */}
            <button 
              onClick={() => navigate(`/events/${event.id}`)}
              className="mt-4 px-6 py-3 bg-golden text-black font-harryp rounded-lg hover:bg-golden-dark transition-all relative z-10"
            >
              Know More
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EventSection;