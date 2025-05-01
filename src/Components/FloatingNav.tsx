import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";



export const FloatingNav = ({ navItems, className = "" }) => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`flex w-full sm:w-fit max-w-full sm:max-w-fit fixed top-4 inset-x-4 sm:inset-x-0 mx-auto 
  border border-transparent dark:border-white/[0.2] 
  rounded-full dark:bg-black bg-gray-800 shadow-md z-[5000] 
  px-4 sm:px-10 py-3 sm:py-6 items-center 
  justify-center space-x-4 sm:space-x-8 ${className} 
  overflow-x-hidden`}
    >
      {navItems.map((navItem, idx) => (
        <Link
          to={navItem.link}
          smooth={true}
          duration={500}
          spy={true}
          offset={-70}
          key={`link-${idx}`}
          activeClass="active"
          
          className="cursor-pointer relative text-white dark:text-neutral-50 items-center flex space-x-1 text-base sm:text-lg md:text-xl hover:text-neutral-400 dark:hover:text-neutral-300 transition-colors "
        >
          
          <span>{navItem.name}</span>
        </Link>
      ))}
    
    </motion.div>
  );
};
