import { TypeAnimation } from 'react-type-animation';

export default function Journey() {
  return (
    <div className="mt-16">
      <h3 className="text-3xl font-bold text-white mb-4 border-b-4 border-red-600 inline-block">
        📈 My Journey
      </h3>

      {/* Type Animation Line */}
      <div className="text-lg sm:text-xl md:text-2xl text-red-400 font-semibold mb-4">
        <TypeAnimation
          sequence={[
            "Started from HTML & CSS",
            2000,
            "Built websites with React",
            2000,
            "Explored Next.js for server-side rendering",
            2000,
            "Diving into Node.js backend",
            2000,
            "Now learning React Native & ML 🚀",
            2000,
          ]}
          speed={50}
          repeat={Infinity}
        />
      </div>

      <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
        My journey as a developer began in <span className="text-red-500 font-semibold">2024</span> with a strong foundation in front-end technologies like HTML, CSS, and JavaScript. 
        I quickly progressed to building full-scale UI projects using <span className="text-red-500">React</span> and <span className="text-red-500">Next.js</span>, focusing on clean design and responsive layouts.
      </p>

      <p className="text-gray-300 text-base sm:text-lg md:text-xl mt-4 leading-relaxed">
        As my passion grew, I stepped into the world of backend development with <span className="text-red-500">Node.js</span>, learning how to connect databases and build powerful APIs. Currently, I’m expanding into <span className="text-red-500">React Native</span> to create mobile apps, and also exploring <span className="text-red-500">Machine Learning</span> to solve real-world problems with data.
      </p>
    </div>
  );
}

  