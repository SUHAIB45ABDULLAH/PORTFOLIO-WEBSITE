// src/components/Projects.jsx
import React from "react";
import ProjectCard from "./Projectcard";

const projects = [
  {
    name: "Portfolio Website",
    description: "A personal portfolio built with React and TailwindCSS.",
    techStack: ["React", "TailwindCSS", "Vite"],
    githubLink: "https://github.com/yourname/portfolio",
    liveLink: "https://yourportfolio.com",
    image: "/assets/screencapture-localhost-5173-home-2025-04-22-16_51_49.png",
  },
  {
    name: "Donation Website",
    description: "A donation platform built with React and Next.js.",
    techStack: ["Next.js", "Node.js", "Stripe API"],
    githubLink: "https://github.com/SUHAIB45ABDULLAH/Donation-Website",
    liveLink: "https://donation-website-omega.vercel.app/",
    image: "/assets/screencapture-donation-website-omega-vercel-app-services-2025-04-22-16_50_43.png",
  },
  {
    name: "Clone project",
    description: "A clone project for digital marketing agency",
    techStack: ["Next.js", "Node.js", "Stripe API"],
    githubLink: "https://github.com/SUHAIB45ABDULLAH/encirckel-clone-assigment",
    liveLink: "https://spontaneous-brigadeiros-94bbb5.netlify.app/",
    image: "/assets/dd.jpg",
  },
  {
    name: "TODO App",
    description: "A simple TODO app built with React.",
    techStack: ["Next.js", "Node.js", "Stripe API"],
    githubLink: "https://github.com/SUHAIB45ABDULLAH/TODO-APP",
    liveLink: "https://spiffy-crostata-edf9bf.netlify.app/",
    image: "/assets/742shots_so.png",
  },
  
];

const Projects = () => {
  return (
    <section id="project" className="min-h-screen bg-black text-white py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl text-center mb-6">My Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
