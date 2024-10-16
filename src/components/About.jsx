// src/components/About.js
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 px-4">
      <div className="container mx-auto text-center md:text-left">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>
        <p className="text-lg md:text-xl">
        I'm Kesavan, an organized and versatile developer with a passion for creating data-driven solutions and 
        seamless web applications. With a strong background in Python, Data Science, SQL, and web technologies, 
        I bring a unique blend of skills in front-end and back-end development. I specialize in optimizing performance
         through advanced analytics and efficient database management, delivering high-impact results for businesses..
        </p>
        <p className="text-lg md:text-xl">
        Currently, I work as a Junior Developer at Gateway Software Solutions, where I collaborate with teams 
        to integrate machine learning models into web applications and optimize database performance. I am dedicated
         to continuous learning and staying at the forefront of technology,
         with hands-on experience in tools such as Power BI, Streamlit, and React.
        </p>
      </div>
    </section>
  );
};

export default About;
