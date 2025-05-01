import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaWind,   FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from 'react-icons/si';
import { RiTailwindCssFill } from "react-icons/ri";

const skillsData = [
  {
    title: "HTML",
    description: "HTML is the standard markup language for creating web pages. It provides the basic structure for web documents and helps in defining the content and structure of a web page. ",
    icon: <FaHtml5 className="text-orange-500" />,
    hoverClass: "hover:bg-orange-400 hover:text-white",
  },
  {
    title: "CSS",
    description: "CSS is used to style and layout web pages. It controls the look and feel of the web pages, including the design, colors, fonts, and spacing, making them visually appealing. ",
    icon: <FaCss3Alt className="text-blue-300" />,
    hoverClass: "hover:bg-blue-500 hover:text-white",
  },
  {
    title: "Tailwind CSS",
    description: "Tailwind CSS is a utility-first CSS framework that allows for rapid design and customization of web pages without writing custom CSS. It promotes consistency and efficiency in styling.  ",
    icon: <RiTailwindCssFill  className="text-teal-500" />,
    hoverClass: "hover:bg-cyan-400 hover:text-white",
  },
  {
    title: "JavaScript",
    description: "JavaScript is a versatile scripting language that enables interactive web features. It is used to create dynamic content, control multimedia, and handle events on web pages.  ",
    icon: <FaJs className="text-yellow-400" />,
    hoverClass: "hover:bg-yellow-600 hover:text-white",
  },
  {
    title: "TypeScript",
    description: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It adds static typing to JavaScript, which improves code quality and development experience. ",
    icon: <SiTypescript className="text-blue-300" />,
    hoverClass: "hover:bg-blue-500 hover:text-white",
  },
  {
    title: "Next.js",
    description: "Next.js is a React framework that provides server-side rendering and static site generation capabilities. It helps in building optimized, fast, and scalable web applications.  ",
    icon: <SiNextdotjs className="text-white" />,
    hoverClass: "hover:bg-gray-600 hover:text-gray",
  },
  {
    title: "Node.js",
    description: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows for server-side scripting and building scalable network applications using JavaScript.  ",
    icon: <FaNodeJs className="text-green-300" />,
    hoverClass: "hover:bg-green-500 hover:text-white",
  },
  {
    title: "React.js",
    description:
      "React.js is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage application state efficiently.",
    icon: <FaReact className="text-sky-200" />, // Fixed icon usage and class name
    hoverClass: "hover:bg-sky-400 hover:text-white",
  },
];

const Skills = () => {
  return (
    <section className="bg-[#000000] text-white py-20 px-6" id="skills">
      <h2 className="text-center text-4xl font-bold mb-16">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className={`group bg-gray-800 ${skill.hoverClass} transition-all duration-300 p-8 min-h-96 rounded-2xl text-center shadow-xl`}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{
              scale: 1.05, // Slightly scale the card on hover
              y: -10, // Lift it a bit
              transition: { duration: 0.3 },
            }}
            whileTap={{
              scale: 1.05, // Slightly scale the card on tap (for mobile)
              y: -10, // Lift the card on tap
              transition: { duration: 0.3 },
            }}
          >
<motion.div
  className="text-6xl mb-6"  // Removed group-hover, instead handle it with Framer Motion
  whileHover={{
    rotate: index % 2 === 0 ? 360 : 0,
    y: index % 2 === 0 ? 0 : -10,
    scale: 1.1,
    color: "white",  // Directly change color to white during hover
    transition: { duration: 0.3 },
  }}
  whileTap={{
    rotate: index % 2 === 0 ? 360 : 0,
    y: index % 2 === 0 ? 0 : -10,
    scale: 1.1,
    transition: { duration: 0.3 },
  }}
>
  {skill.icon}
</motion.div>
            
            <h3 className="text-3xl font-semibold mb-3  group-hover:text-white ">
              {skill.title}
              </h3>
            <p className="text-base text-gray-300 group-hover:text-white">
              {skill.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
    );
    
};

export default Skills;



