import { FloatingNav } from "./Components/FloatingNav";
import  Herosection from "./Components/Herosection";

import AboutMe from "./aboutme/Aboutme";
import Projects from "./project/Project";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
import Services from "./Services/Servicecard";

const navItems = [
  { name: "Home", link: "home" },
  { name: "About", link: "about" },
  { name: "Skills", link: "skills"  },
  { name: "Project", link: "project"  },
  { name: "Service", link: "service"  },
  { name: "Contact", link: "contact" },
];

function App() {
  return (
    <div>
      <FloatingNav navItems={navItems} />
     <Herosection />
     <AboutMe />
     <Skills />
     <Projects />
     <Services />
     <Contact />
   
   </div>
  );
}

export default App;



