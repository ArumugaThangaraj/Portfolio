import React from 'react';
import './Portfolio.css';
import zoroImage from './Zoro-3.jpg';
import luffyImage from './Luffy-1.png';

const Portfolio = () => {
  return (
    <div>
      {/* Header Section */}
      <header>
        <a href="/" className="logo">AJ</a>
        <nav className="nav">
          <a href="#home" className="hm">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#project">Project</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Home Section */}
      <section className="home" id="home">
        <div className="home-content">
          <h1><i>Hii!</i> <br /> I'm <b>Arumuga Thangaraj</b></h1>
          <p>Aspiring Software Developer with Focus on Web Development</p>
          <div className="btn">
            <a href="#./Zoro-3.jpg">Download CV</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="about-content">
          <img src={luffyImage} alt="Nothing" />
          <div className="content">
            <h1>About</h1>
            <p>Hello! I am Groot, a dedicated and passionate final-year student focused on building a career in web development and software engineering.I enjoy crafting user-friendly websites and learning new programming languages. Currently, I'm deepening my skills in java to add backend development to my toolkit. My goal is to grow as a developer and create solutions that make a positive impact.</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <h1 className="h1">Skills</h1>
        <div className="skill-content">
          <div className="tech">
            <h1>Tech Skills</h1>
            <div className="c-set">
              <SkillCircle skill="HTML" level="90%" />
              <SkillCircle skill="CSS" level="75%" />
              <SkillCircle skill="JavaScript" level="30%" />
              <SkillCircle skill="Java" level="30%" />
            </div>
          </div>
          <div className="soft">
            <h1>Soft Skills</h1>
            <ul>
              <li>Communication</li>
              <li>Leadership</li>
              <li>Self-motivation</li>
              <li>Time Management</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section id="project">
        <h1>Projects</h1>
        <Project
          title="E-commerce Website"
          description="Developed on e-commerce website from scratch with essential features like login, checkout, and cart. This project showcases my ability in HTML, CSS and JavaScript."
          image={zoroImage}
        />
        <Project
          title="Chat Application"
          description="This is a real-time chat application that enables users to communicate seamlessly through instant messaging. The application supports one-on-one and group chats, providing users with a platform to share messages,images and other in real time."
          image={zoroImage}
        />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="contact-content">
          <h2>Contact Me</h2>
          <form action="#" method="post">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2024 Groot's Portfolio</p>
        <p className="link">
          <a href="./anchor.html">LinkedIn</a>
          <a href="./circle.html">Github</a>
        </p>
      </footer>
    </div>
  );
};

// Reusable SkillCircle component
const SkillCircle = ({ skill, level }) => (
  <div className="center">
    <div className={`circle circle-${skill.toLowerCase()}`}>
      <div className="txt">
        <div className="t">{level}</div>
      </div>
    </div>
    <h2>{skill}</h2>
  </div>
);

// Reusable Project component
const Project = ({ title, description, image }) => (
  <div className="pg1">
    <div className="ig1">
      <img src={image} alt={title} className="ig2" />
      <div className="ig1-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  </div>
);

export default Portfolio;
