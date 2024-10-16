// src/components/Projects.js
import React from 'react';

const projects = [
  {
    name: "JAVA & J2EE",
    description: "User Authentication Web Site & Java  Projects...",
    url: "#",
  },
  {
    name: "PYTHON ",
    description: "Attendance Register Using Open CV ...",
    url: "#",
  },
  {
    name: "DATA SCIENCE / ANALYST",
    description: " Data Analysis Using Python & Mini Projects...",
    url: "#",
  },
  {
    name: "WEB TECHOLOGIES ",
    description: "Web site & Portfolio website using React.js ...",
    url: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">{project.name}</h3>
              <p className="text-lg mb-4">{project.description}</p>
              <a href={project.url} className="text-blue-500 hover:underline">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
