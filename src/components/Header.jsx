// src/components/Header.js
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 text-white fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Mr . Kesavan </h1>

        {/* Hamburger Icon (Visible on small screens) */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <FaTimes className="text-3xl cursor-pointer" />
          ) : (
            <FaBars className="text-3xl cursor-pointer" />
          )}
        </div>

        {/* Navigation Links */}
        <nav className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#skills" className="hover:underline">Skills</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
