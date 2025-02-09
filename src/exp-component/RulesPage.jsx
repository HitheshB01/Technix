import React from 'react';
import { motion } from 'framer-motion';

const RulesPage = () => {
  const rules = [
    {
      title: "General Guidelines 🏆",
      items: [
        "Participants must carry a valid college ID card.",
        "Registration fees are non-refundable.",
        "Any form of misbehavior or indiscipline will result in disqualification.",
      ],
    },
    {
      title: "Eligibility Criteria 🎓",
      items: [
        "Only MCA and BCA students are allowed to participate.",
        "Individual Events: Maximum 3 participants per college.",
        "Group Events: Maximum 2 teams per college.",
      ],
    },
    {
      title: "Code of Conduct ⚡",
      items: [
        "No use of Dark Arts (plagiarism) allowed!",
        "Participants must bring their own electronic devices.",
        "The college will not be responsible for any loss of valuables or personal belongings.",
      ],
    },
    {
      title: "Event-Specific Rules 🚀",
      items: [
        "Detailed event instructions will be given by the respective event coordinators before the event.",
        "Since all events are held on campus, participants’ presence on campus is mandatory.",
        "The judges' decision is final.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-parchment bg-cover bg-center p-8 relative overflow-hidden">
      {/* Floating Candles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className="absolute w-4 h-8 bg-yellow-400 rounded-full opacity-50"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 6 + 4}s infinite ease-in-out`,
            }}
          ></div>
        ))}
      </div>

      {/* Page Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto bg-opacity-90 bg-white rounded-lg shadow-lg p-8"
      >
        <h1 className="text-4xl font-harryp text-golden text-center mb-8">
          General Rules of Technix 6.0
        </h1>

        {/* Rule Sections */}
        {rules.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-harryp text-golden mb-4">{section.title}</h2>
            <ul className="list-disc list-inside text-black">
              {section.items.map((item, index) => (
                <li key={index} className="mb-2 text-lg">{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}

        {/* Swear to Follow Button */}
        <div className="text-center mt-8">
          <button className="px-6 py-3 bg-golden text-black font-harryp text-xl rounded-lg hover:bg-golden-dark transition-all">
            I Swear to Follow the Rules ✨
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default RulesPage;