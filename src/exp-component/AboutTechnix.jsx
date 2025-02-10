import React from 'react';
import { motion } from 'framer-motion';
// import FloatingBooks from './FloatingBooks';

const AboutTechnix = () => {
  return (
    <div className="min-h-screen bg-night-sky text-golden">
      {/* Floating Books */}
      {/* <FloatingBooks /> */}

      {/* Hero Section */}
      <section className="relative flex flex-col items-center text-center py-12">
  <motion.h1
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="text-6xl font-harryp mb-2"
  >
    World Of Technix 6.0
  </motion.h1>
  <p className="text-xl max-w-2xl mx-auto">
    In a world of Technology where logic meets magic.
  </p>
</section>


     

      {/* Houses & Events Overview */}
      {/* <section className="py-16 px-4">
        <h2 className="text-4xl font-harryp text-center mb-8">
          Houses & Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'].map(
            (house, index) => (
              <div
                key={index}
                className="bg-parchment p-6 rounded-lg shadow-lg text-dark-brown"
              >
                <h3 className="text-2xl font-bold mb-4">{house}</h3>
                <p>Event details for {house}.</p>
              </div>
            )
          )}
        </div>
      </section> */}
      <section className="py-16 px-4">
  <h2 className="text-4xl font-harryp text-center mb-8">Houses & Events</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
    {[
      {
        name: 'Gryffindor',
        description: 'Bravery and courage define the lions of Gryffindor.',
        events: ['Code Of Phoenix', 'Quidditch Of Consoles'],
      },
      {
        name: 'Slytherin',
        description: 'Ambition and cunning lead Slytherins to victory.',
        events: ['CSSlytherin', 'Golden Snitch'],
      },
      {
        name: 'Ravenclaw',
        description: 'Wisdom and wit guide Ravenclaws in their pursuits.',
        events: ['Azkaban Breakout', 'The Daily Prophet'],
      },
      {
        name: 'Hufflepuff',
        description: 'Dedication and loyalty shine in every Hufflepuff.',
        events: ['Quad-Wizard Gauntlet', 'Spells, Scrolls & Syntaxes'],
      },
    ].map((house, index) => (
      <div
        key={index}
        className="bg-parchment p-6 rounded-lg shadow-lg text-dark-brown"
      >
        <h3 className="text-2xl font-bold mb-4">{house.name}</h3>
        <p className="mb-4">{house.description}</p>
        <ul className="list-disc list-inside">
          {house.events.map((event, idx) => (
            <li key={idx} className="mb-2">
              {event}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</section>

    </div>
  );
};

export default AboutTechnix;