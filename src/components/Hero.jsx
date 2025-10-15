import "../App.css";
import { Container, Row, Col } from "react-bootstrap";


const Hero = () => {
  return (
    <section className="hero" id="home">
      <Container>
        <Row className="align-items-center">
          <Col className="hero-content text-center mt-4">
            <h1 className="hero-title">
              I’m <span className="highlight">Arumuga Thangaraj</span>
            </h1>
            <h2>Web Developer</h2>
            <p>
              I'm a passionate Web Developer with a strong foundation in HTML, CSS, JavaScript,React (Vite) and Next.js. I also have basic knowledge of Node.js, Express, and Firebase, enabling me to build dynamic, full-stack applications. Always eager to learn and grow, I love turning ideas into clean, responsive, and user-friendly web experiences.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn">
                View My Work
              </a>
              <a href="/Resume.pdf" download="Resume.pdf" className="btn secondary">
                Download Resume
              </a>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Hero;
