import { useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import "../App.css";
import projectMsh from "../assets/projectmsh.jpg";
import projectChat from "../assets/projectchat.png";
import projectWeather from "../assets/projectWeather.png";
import projectBMI from "../assets/projectBMI.png";

const projects = [
  {
    title: "Migrant Support Hub",
    description: "A platform to connect migrants with resources and support services, featuring user-friendly navigation and multilingual support.",
    image: projectMsh,
    liveLink: "https://migrant-support-web.vercel.app/",
    codeLink: "https://github.com/ArumugaThangaraj/MigrantSupportHub"
  },
  {
    title: "Chat Application",
    description: "A real-time chat app using HTML,CSS, JavaScript, Socket.io, and Node.js for instant messaging.",
    image: projectChat,
    codeLink: "https://github.com/ArumugaThangaraj/CodeClauseInternship_Project-Chatroom"
  },
  {
    title: "Weather App",
    description: "A simple weather application that provides current weather information and forecasts using a public API.",
    image: projectWeather,
    liveLink: "https://weather-app-git-main-theforgetech.vercel.app/",
    codeLink: "https://github.com/ArumugaThangaraj/WeatherApp"
  },
  {
    title: "BMI Calculator",
    description: "A simple BMI calculator that computes Body Mass Index from user inputs of height and weight, and classifies the result as underweight, normal, overweight, or obese.",
    image: projectBMI,
    liveLink: "bmi-calculator-kappa-three.vercel.app",
    codeLink: "https://github.com/ArumugaThangaraj/BMI-Calculator"
  }
];

export default function Projects() {
  const [show, setShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (project) => {
    setSelectedProject(project);
    setShow(true);
  };

  return (
    <section id="projects" className="projects">
      <Container>
        <h2 className="section-title">My Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={6} sm={6} xs={12} key={index} className="mb-5">
              <Card className="project-card mx-auto">
                <Card.Img variant="top" src={project.image} />
                <Card.Body className="text-center">
                  <Card.Title>{project.title}</Card.Title>
                  {index !== 1 ? (
                    <div className="d-flex justify-content-center gap-2">
                      <Button
                        variant="success"
                        size="sm"
                        href={project.liveLink}
                        target="_blank"
                      >
                        Live
                      </Button>
                      <Button
                        variant="success"
                        size="sm"
                        onClick={() => handleShow(project)}
                      >
                        Details
                      </Button>
                    </div>
                  ) :  <Button
            variant="success"
            href={selectedProject?.codeLink}
            target="_blank"
          >
            View Code
          </Button>}

                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal for Project Details */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton style={{ backgroundColor: "#26263a", color: "#fff" }}>
          <Modal.Title>{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#1e1e2f", color: "#ccc" }}>
          <img
            src={selectedProject?.image}
            alt={selectedProject?.title}
            className="img-fluid popup-image mb-3"
            style={{ borderRadius: "10px" }}
          />
          <p>{selectedProject?.description}</p>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#26263a" }}>
          <Button
            variant="success"
            href={selectedProject?.liveLink}
            target="_blank"
          >
            View Live
          </Button>
          <Button
            variant="success"
            href={selectedProject?.codeLink}
            target="_blank"
          >
            View Code
          </Button>
        </Modal.Footer>
      </Modal>
    </section >
  );
}
