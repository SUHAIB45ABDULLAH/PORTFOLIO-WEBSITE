import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Particles } from "@tsparticles/react";
import { tsParticles } from "@tsparticles/engine";
import { TypeAnimation } from 'react-type-animation';

export default function HeroSection() {
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  useEffect(() => {
    // Add your logic to detect low-performance systems
    // For example, based on the device or window size
    const detectLowPerformance = () => {
      if (window.innerWidth < 768) {
        setIsLowPerformance(true);
      } else {
        setIsLowPerformance(false);
      }
    };

    detectLowPerformance();
    window.addEventListener("resize", detectLowPerformance);

    return () => window.removeEventListener("resize", detectLowPerformance);
  }, []);

  const particlesInit = async (main) => {
    await tsParticles(main);
  };

  return (
    <div className="relative h-screen bg-black text-white overflow-hidden flex items-center justify-center">
      <section id="home">
        {/* Particle background */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: {
              color: "#000000",
            },
            particles: isLowPerformance
              ? {
                  number: { value: 15 }, // Use a very low particle count on low-performance systems
                  size: { value: 2 },
                  move: { enable: false },
                }
              : {
                  number: { value: 60 },
                  color: { value: "#ffffff" },
                  links: { enable: true, color: "#ffffff", distance: 150 },
                  move: { enable: true, speed: 1.2 },
                  size: { value: 2 },
                },
          }}
          className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 "
        />
        {/* Glow effect behind text */}
        <div className="absolute w-[300px] h-[300px] bg-red-500 rounded-full blur-[150px] opacity-20 z-0"></div>
        
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Hello, I'm <span className="text-red-500">Suhaib Abdullah</span>
          </h1>
          {/* Typewriter Animation */}
          <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-red-400 mb-4">
            <TypeAnimation
              sequence={[
                2000,
                "I'm a Full-Stack Developer 🚀",
                2000,
                "I build Modern UIs 🖥️",
                2000,
                "I solve Real-World Problems 💡",
                2000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity} // Will keep repeating the animation
            />
          </div>

          <button
            className="mt-8 px-6 py-2 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition duration-300 rounded shadow-lg shadow-red-500/30"
            onClick={() => {
              const section = document.getElementById("project");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View my work ↓
          </button>
        </motion.div>
      </section>
    </div>
  );
}


