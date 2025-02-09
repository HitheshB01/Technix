import React from 'react';
import { motion } from 'framer-motion';
import { Home, ScrollText, Zap, Wand, Users, Coins, Trophy, Mail, Phone, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-night-sky bg-opacity-90 text-golden py-8 px-4 mt-16"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-harryp mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { label: 'Home', icon: <Home className="w-5 h-5" />, path: '/' },
              { label: 'Events', icon: <Zap className="w-5 h-5" />, path: '/events' },
              { label: 'Advisors', icon: <Wand className="w-5 h-5" />, path: '/advisors' },
              { label: 'Coordinators', icon: <Users className="w-5 h-5" />, path: '/coordinators' },
              { label: 'Sponsors', icon: <Coins className="w-5 h-5" />, path: '/sponsors' },
              { label: 'Register', icon: <Trophy className="w-5 h-5" />, path: '/register' },
            ].map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.05, textShadow: '0 0 10px rgba(255, 215, 0, 0.8)' }}
                className="flex items-center space-x-2 hover:text-golden-dark transition-all"
              >
                {link.icon}
                <a href={link.path}>{link.label}</a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-harryp mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>technix6.0@hogwarts.edu</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>+1 234 567 890</span>
            </li>
          </ul>
          <div className="flex space-x-4 mt-4">
            {[
              { icon: <Instagram className="w-6 h-6" />, path: 'https://instagram.com' },
              { icon: <Twitter className="w-6 h-6" />, path: 'https://twitter.com' },
              { icon: <Linkedin className="w-6 h-6" />, path: 'https://linkedin.com' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.path}
                whileHover={{ rotate: 15, scale: 1.2 }}
                className="text-golden hover:text-golden-dark transition-all"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Credits & Team */}
        <div>
          <h3 className="text-xl font-harryp mb-4">Credits</h3>
          <p className="flex items-center space-x-2">
            <span>Crafted by the Wizards of</span>
            <span className="text-golden-dark font-bold">Technix6.0</span>
          </p>
        </div>
      </div>

      {/* Mischief Managed */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center mt-8 text-golden-dark font-harryp text-lg"
      >
        Mischief Managed
      </motion.div>
    </motion.footer>
  );
};

export default Footer;