import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skill from "./components/Skills.jsx";
import Project from "./components/Project.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Skill />
        <Project />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
