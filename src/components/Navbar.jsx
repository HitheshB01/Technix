import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 p-4 shadow-lg border-b-2 border-blue-500">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/201/201623.png" // Replace with your logo URL
            alt="TECHNIX Logo"
            className="w-8 h-8 md:w-10 md:h-10 mr-2"
          />
          <h1 className="text-xl md:text-2xl font-bold text-blue-500 font-futuristic">
            TECHNIX 6.0
          </h1>
        </div>

        {/* Hamburger Menu Button (Visible on Mobile) */}
        <button
          className="md:hidden text-blue-500 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Desktop Menu (Hidden on Mobile) */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-blue-500 hover:text-blue-300 font-futuristic">
            Home
          </a>
          <a href="/about" className="text-blue-500 hover:text-blue-300 font-futuristic">
            About
          </a>
          <a href="/events" className="text-blue-500 hover:text-blue-300 font-futuristic">
            Events
          </a>
          <a href="/register" className="text-blue-500 hover:text-blue-300 font-futuristic">
            Register
          </a>
        </div>
      </div>

      {/* Mobile Menu (Visible when Hamburger is clicked) */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <a
            href="/"
            className="block py-2 text-blue-500 hover:text-blue-300 font-futuristic"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="/about"
            className="block py-2 text-blue-500 hover:text-blue-300 font-futuristic"
            onClick={toggleMenu}
          >
            About
          </a>
          <a
            href="/events"
            className="block py-2 text-blue-500 hover:text-blue-300 font-futuristic"
            onClick={toggleMenu}
          >
            Events
          </a>
          <a
            href="/register"
            className="block py-2 text-blue-500 hover:text-blue-300 font-futuristic"
            onClick={toggleMenu}
          >
            Register
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;