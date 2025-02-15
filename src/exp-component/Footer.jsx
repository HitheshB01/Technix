import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Instagram,  } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-night-sky bg-opacity-90 text-golden py-8 px-4 mt-16"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
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
              <span>+91 9901767545</span>
            </li>
          </ul>
          <div className="flex space-x-4 mt-4">
            {[
              { icon: <Instagram className="w-6 h-6" />, path: 'https://www.instagram.com/technix6.0?igsh=ZHhxZ2N0dXFyZWls' },
              // { icon: <Twitter className="w-6 h-6" />, path: 'https://twitter.com' },
              // { icon: <Linkedin className="w-6 h-6" />, path: 'https://linkedin.com' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.path}
                whileHover={{ rotate: 15, scale: 1.2 }}
                className="text-golden hover:text-golden-dark transition-all"
              >Technix6.0
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
      {/* <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center mt-8 text-golden-dark font-harryp text-lg"
      >
        Mischief Managed
      </motion.div> */}
    </motion.footer>
  );
};

export default Footer;
