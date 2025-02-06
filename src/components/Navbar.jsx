import React, { useState } from 'react';
import { FaSort, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa'; // Sorting Hat, Owl Post, Hamburger Icons
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle Hamburger Menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-parchment bg-cover bg-opacity-90 backdrop-blur-md z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo and Sorting Hat Icon */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-2xl font-bold text-yellow-900 font-harry hover:text-yellow-700 transition duration-300">
            Hogwarts IT Fest
          </Link>
          <div className="relative group">
            <FaSort className="text-yellow-900 text-2xl cursor-pointer hover:text-yellow-700 transition duration-300 transform hover:rotate-12" />
            <div className="absolute top-10 left-0 bg-gray-800 p-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-yellow-300 text-sm">Sorting Hat</span>
            </div>
          </div>
        </div>

        {/* Hamburger Menu Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes className="text-yellow-900 text-2xl" />
            ) : (
              <FaBars className="text-yellow-900 text-2xl" />
            )}
          </button>
        </div>

        {/* House-Themed Tabs */}
        <div
          className={`md:flex space-x-6 ${isMenuOpen ? 'block' : 'hidden'} absolute md:static top-16 left-0 w-full md:w-auto bg-parchment bg-cover md:bg-none p-4 md:p-0`}
        >
          <Link
            to="/"
            className="block text-yellow-900 font-lumos hover:text-gryffindor-red transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/houses"
            className="block text-yellow-900 font-lumos hover:text-slytherin-green transition duration-300"
          >
            Houses
          </Link>
          <Link
            to="/events"
            className="block text-yellow-900 font-lumos hover:text-ravenclaw-blue transition duration-300"
          >
            Events
          </Link>
          <Link
            to="/registration"
            className="block text-yellow-900 font-lumos hover:text-hufflepuff-yellow transition duration-300"
          >
            Registration
          </Link>
          <Link
            to="/updates"
            className="block text-yellow-900 font-lumos hover:text-purple-500 transition duration-300"
          >
            Updates
          </Link>
          <Link
            to="/contact"
            className="block text-yellow-900 font-lumos hover:text-gray-700 transition duration-300"
          >
            <FaEnvelope className="inline-block mr-2" />
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;