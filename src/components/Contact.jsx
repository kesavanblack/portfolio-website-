// src/components/Contact.js
import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
        <div className="space-y-4 max-w-lg mx-auto mb-8">
          <div className="flex items-center justify-center space-x-4">
            <FaEnvelope className="text-blue-500" />
            <span>Kesavansanmugam250@gmail.com</span>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <FaPhone className="text-blue-500" />
            <span>+91 86103 43765</span>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <FaMapMarkerAlt className="text-blue-500" />
            <span>4/110-1  Thumbal Patty,Salem,Tamil Nadu - 636204 </span>
            
          </div>
        </div>
        {/* <form className="space-y-4 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-lg bg-gray-100 border"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-lg bg-gray-100 border"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-4 rounded-lg bg-gray-100 border h-32"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form> */}
        <div className="flex justify-center space-x-6 mt-8">
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl text-blue-500 hover:text-yellow-600 transition duration-300" />
          </a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl text-blue-500 hover:text-green-600 transition duration-300" />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl text-blue-500 hover:text-red-600 transition duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

