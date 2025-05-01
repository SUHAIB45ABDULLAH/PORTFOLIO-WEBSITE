import React from "react";
import { FaCode, FaPaintBrush, FaMobileAlt } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from 'react-scroll';

const services = [
  {
    title: "Web Development",
    description:
      "Expert web development services to bring your ideas to life. From conceptualization to deployment, craft robust, scalable, and secure web applications that meet your business needs.",
    icon: <FaCode size={40} />,
    color: "bg-blue-500",
  },
  {
    title: "Web Design",
    description:
      "Creative web designing solutions to captivate your audience. Design visually stunning, user-friendly, and engaging websites that reflect your brand identity and drive growth.",
    icon: <FaPaintBrush size={40} />,
    color: "bg-pink-400",
  },
  {
    title: "Improve UI/UX Design  ",
    description:
      "Crafting responsive web designs that deliver seamless, intuitive experiences across all devices — mobile, tablet, and desktop. Our designs adapt fluidly to every screen size, ensuring a beautiful and user-friendly journey for every visitor.  ",
    icon: <FaMobileAlt size={40} />,
    color: "bg-green-500",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const ServiceCards = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section id="service" ref={ref}>
      <div className="bg-black text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Services</h2>
          <p className="text-gray-300 mb-12">
            Explore our professional web solutions designed to help you succeed
            in the digital world.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`rounded-xl p-6 min-h-[400px] text-left text-white shadow-md transform hover:scale-105 hover:shadow-2xl  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ${service.color}`}
                variants={cardVariants}
                initial="hidden"
                animate={controls}
                custom={index}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <Link href="contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition cursor-pointer"
            >
              CONTACT ME
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;

