import React, { useEffect } from 'react';
import './App.css';
import Skill from './components/Skill';
import ProjectCard from './components/ProjectCard';
import Contact from './components/Contact';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';






function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, 
      anchorPlacement: 'top-bottom'
    });
  }, []);
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">My Portfolio</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#education">Education</a></li>
              <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
              <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="section bg-primary text-white py-5" data-aos="fade-up">
        <div className="container">
          <div className="row align-items-center">
            {/* Text Section */}
            <div className="col-md-6 mb-4 mb-md-0">
              <h1 className="display-4 fw-bold">Hi, I'm Arumuga Thangaraj</h1>
              <p className="lead mt-3">
                I’m a dedicated and creative developer who enjoys building websites that are easy to use and visually appealing. My goal is to turn ideas into real, working web experiences that make a difference and solve problems.
              </p>


              <a href="/Resume.pdf" download className="btn btn-light btn-lg mt-4 shadow-sm">
                📄 Download Resume
              </a>
            </div>

            {/* Image Section */}
            <div className="col-md-6 text-center">
              <img src="./image1.jpg" className="img-fluid rounded shadow-lg" alt="Profile" />
            </div>
          </div>
        </div>
      </section>


      <section id="about" className="section bg-light" data-aos="fade-right">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center">
              <img src="./image1.jpg" className="img-fluid rounded-circle" alt="About Me" />
            </div>
            <div className="col-md-6">
              <h2>About Me</h2>
              <p>
                Hey there! I'm someone who's always been curious about how things work behind the screen. I recently finished my Computer Science and Engineering degree, and now I'm stepping into the world as a fresh developer, full of ideas and excitement. I'm really into web development—especially the front end—because I love creating things that people can actually see and interact with. Right now, I’m looking for opportunities where I can turn my ideas into real projects, learn from experience, and grow into the developer I dream to be.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Education Section */}
      <section id="education" className="section bg-white py-5" style={{ background: "#f8fafc" }} data-aos="zoom-in">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">🎓 My Education Journey</h2>
          <div className="row justify-content-center">
            <div className="col-md-8">

              {/* Bachelor’s Degree */}
              <div className="card mb-4 shadow border-start border-2 border-primary">
                <div className="card-body">
                  <h5 className="card-title text-primary fw-semibold">Bachelor of Engineering in Computer Science and Engineering</h5>
                  <p className="card-text mb-1"><strong>Anna University</strong></p>
                  <p className="card-text mb-1"><strong>PGP College of Engineering and Technology, Namakkal</strong></p>
                  <p className="card-text mb-1">2021 – 2025</p>
                  <p className="card-text">Graduated with a CGPA of <strong>7.96/10</strong>, with hands-on projects and a deep curiosity for real-world tech solutions.</p>
                </div>
              </div>

              {/* Higher Secondary */}
              <div className="card mb-4 shadow border-start border-2 border-success">
                <div className="card-body">
                  <h5 className="card-title text-success fw-semibold">Higher Secondary Education</h5>
                  <p className="card-text mb-1"><strong>Aarumugam Academy Matriculation Higher Secondar School, Karur</strong></p>
                  <p className="card-text mb-1">2019 – 2021</p>
                  <p className="card-text">Secured <strong>87%</strong>, with a focus on science and mathematics, laying the foundation for my tech journey.</p>
                </div>
              </div>

              {/* Secondary School */}
              <div className="card mb-4 shadow border-start border-2 border-info">
                <div className="card-body">
                  <h5 className="card-title text-info fw-semibold">Secondary Education</h5>
                  <p className="card-text mb-1"><strong>Government Boys Higher Seconday School, Dindigul</strong></p>
                  <p className="card-text mb-1">2017 – 2019</p>
                  <p className="card-text">Achieved <strong>80%</strong>, always curious and motivated to learn beyond the classroom.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Skills Section */}
      <section id="skills" className="py-5 bg-light" data-aos="zoom-in">
        <div className="container">
          <h2 className="text-center mb-5">
            <i className="bi bi-stars me-2"></i>
            Skills

          </h2>

          <div className="row">
            <div className="col-md-4 mb-4" data-aos="flip-right">
              <h5 className="text-primary mb-3">Frontend</h5>
              <Skill label="HTML" percent={90} />
              <Skill label="CSS" percent={85} />
              <Skill label="JavaScript" percent={80} />
              <Skill label="React.js" percent={50} />
              <Skill label="Bootstrap" percent={75} />
            </div>
            <div className="col-md-4 mb-4" data-aos="flip-right">
              <h5 className="text-success mb-3">Backend</h5>
              <Skill className="progress-bar bg-success" label="Node.js" percent={50} />
              <Skill className="progress-bar bg-success" label="MongoDB" percent={40} />
              <Skill className="progress-bar bg-success" label="Python" percent={60} />
              <Skill className="progress-bar bg-success" label="Java" percent={30} />
            </div>
            <div className="col-md-4 mb-4" data-aos="flip-right">
              <h5 className="text-secondary mb-3">Tools & Others</h5>
              <Skill className="progress-bar bg-secondary" label="Git & GitHub" percent={70} />
              <Skill className="progress-bar bg-secondary" label="VS Code" percent={80} />
              <Skill className="progress-bar bg-secondary" label="Postman" percent={70} />
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section bg-light py-5" data-aos="fade-up">
        <div className="container text-center">
          <h2 className="mb-5 fw-bold">
            <i className="bi bi-folder2-open me-2"></i>
            Projects
          </h2>
          <div className="row">
            <ProjectCard data-aos="zoom-in-up"
              title="Chatroom App"
              imgSrc="./Chatroom.png"
              description="A real-time chat application where multiple users can join a shared room and exchange messages instantly. Built using Node.js and Socket.IO, this project showcases my skills in building interactive back-and-forth communication between users without page reloads."
              githubLink="https://github.com/ArumugaThangaraj/CodeClauseInternship_Project-Chatroom"
              linkedinLink="https://www.linkedin.com/in/arumuga-thangaraj123/recent-activity/all/"
            />
            <ProjectCard data-aos="zoom-in-up"
              title="News Aggregator"
              imgSrc="./Newsaggregator.png"
              description="A web-based tool that fetches and displays the latest news articles from various sources using the News API. Users can filter news by categories like technology, sports, and health. It focuses on delivering up-to-date content in a clean and user-friendly interface."
              githubLink="https://github.com/ArumugaThangaraj/CodeClauseInternship_Project_NewsApp"
              linkedinLink="https://www.linkedin.com/in/arumuga-thangaraj123/recent-activity/all/"
            />
            <ProjectCard data-aos="zoom-in-up"
              title="Migrant Support Hub"
              imgSrc="./Migrant Workers.jpg"
              description="Migrant Support Hub is a user-friendly web platform designed to assist migrant workers by providing streamlined access to essential services such as complaint registration, helpline support, legal assistance, and community interaction. The platform allows users to submit and track complaints, engage in public discussions, access important updates, and connect with support providers efficiently."
              githubLink="https://github.com/ArumugaThangaraj/MigrantSupportHub"
              liveLink="https://migrant-support-hub.onrender.com"
            />
          </div>
        </div>
      </section>
      <>
        {/* Contact Section */}
        <Contact />
      </>



      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-5">
        <div>
          <a href="https://github.com/ArumugaThangaraj/" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/arumuga-thangaraj123?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <i className="bi bi-linkedin"></i>
          </a>
          <p className="mt-3 mb-0">© 2025 My Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};


export default App;
