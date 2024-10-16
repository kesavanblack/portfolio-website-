// src/components/Home.js
import React from 'react';

const Home = () => {
  return (
    <section id="home" className="h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-4">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Kesavan </h1>
        <p className="text-lg md:text-2xl mb-6">I'm a passionate software developer specializing in Web Development, Python, and Data Science.</p>
        <a href="#about" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Home;
