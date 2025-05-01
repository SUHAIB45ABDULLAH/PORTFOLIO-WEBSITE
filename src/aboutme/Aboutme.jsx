import React from 'react';
import Journey from './Journey';
import Certificate from './Certificate';
import ResumeButton from './ResumeButton';
import { TypeAnimation } from 'react-type-animation';


export default function AboutMe() {
  return (
    <section className="bg-black py-16 px-6 md:px-20" id="about">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
  
      {/* Profile Image */}
      <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-red-600 shadow-red-800 shadow-xl">
        <img
          src="/assets/hehhe.jpg"
          alt="Suhaib's profile"
          className="w-full h-full object-cover"
        />
      </div>
  
      {/* Right Side Content */}
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold text-white mb-6 border-b-4 border-red-600 inline-block">
          About Me
        </h1>
  
        {/* Typewriter Animation Line */}
        <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-red-400 mb-4">
          <TypeAnimation
            sequence={[
              "I'm a Full-Stack Developer 🚀",
              2000,
              "I build Modern UIs 🖥️",
              2000,
              "I solve Real-World Problems 💡",
              2000,
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
          />
        </div>
        console.log('HeroSection rendered');

        <p className="text-lg text-gray-300 leading-relaxed">
          I'm <span className="text-red-500 font-semibold">Suhaib Abdullah</span>, a passionate full-stack developer with expertise in{" "}
          <span className="text-red-500">JavaScript</span>,{" "}
          <span className="text-red-500">React</span>,{" "}
          <span className="text-red-500">Node.js</span>, and{" "}
          <span className="text-red-500">Next.js</span>.
        </p>
  
        <p className="text-lg text-gray-300 mt-4 leading-relaxed">
        I’m passionate about building modern, visually appealing user interfaces and enjoy solving real-world problems through clean, efficient code. Bringing ideas to life through design and development is what drives me.
        </p>
       
          <Journey />
          <Certificate />
          <ResumeButton />
        </div>
      </div>
    </section>
  );
}




