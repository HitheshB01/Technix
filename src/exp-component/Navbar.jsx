// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Home, ScrollText, Zap, Hat, Users, Coins, Trophy } from 'lucide-react';
// import MobileMenu from './MobileMenu';

// const Navbar = () => {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const navLinks = [
//     { label: 'Home', icon: <Home className="w-5 h-5" />, path: '/' },
//     { label: 'About', icon: <ScrollText className="w-5 h-5" />, path: '/about' },
//     { label: 'Events', icon: <Zap className="w-5 h-5" />, path: '/events' },
//     { label: 'Advisors', icon: <Hat className="w-5 h-5" />, path: '/advisors' },
//     { label: 'Coordinators', icon: <Users className="w-5 h-5" />, path: '/coordinators' },
//     { label: 'Sponsors', icon: <Coins className="w-5 h-5" />, path: '/sponsors' },
//     { label: 'Register', icon: <Trophy className="w-5 h-5" />, path: '/register' },
//   ];

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-opacity-80 bg-night-sky"
//     >
//       <div className="container mx-auto px-4 py-3 flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-golden font-harryp text-2xl">Technix 6.0</div>

//         {/* Desktop Links */}
//         <div className="hidden md:flex space-x-8 items-center">
//           {navLinks.map((link, index) => (
//             <motion.a
//               key={index}
//               href={link.path}
//               whileHover={{ scale: 1.1, textShadow: '0 0 10px rgba(255, 215, 0, 0.8)' }}
//               className="flex items-center space-x-2 text-golden hover:text-golden-dark transition-all"
//             >
//               {link.icon}
//               <span>{link.label}</span>
//             </motion.a>
//           ))}
//         </div>

//         {/* Mobile Menu Toggle */}
//         <button
//           onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
//           className="md:hidden text-golden"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setMobileMenuOpen(false)} links={navLinks} />
//     </motion.nav>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, ScrollText, Zap, Coins } from 'lucide-react'; // Removed unused icons
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', icon: <Home className="w-5 h-5" />, path: '/' },
    { label: 'About', icon: <ScrollText className="w-5 h-5" />, path: '/about' },
    { label: 'Events', icon: <Zap className="w-5 h-5" />, path: '/events' },
    { label: 'Sponsors', icon: <Coins className="w-5 h-5" />, path: '/sponsors' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-opacity-80 bg-night-sky"
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-golden font-harryp text-2xl">Technix 6.0</div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.path} // ✅ Using anchor tag
              whileHover={{ scale: 1.1, textShadow: '0 0 10px rgba(255, 215, 0, 0.8)' }}
              className="flex items-center space-x-2 text-golden hover:text-golden-dark transition-all"
            >
              {link.icon}
              <span>{link.label}</span>
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-golden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setMobileMenuOpen(false)} links={navLinks} />
    </motion.nav>
  );
};

export default Navbar;
