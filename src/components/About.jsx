import { Container, Row, Col } from "react-bootstrap";
import "../App.css";

const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <Row className="align-items-center justify-content-center">
          {/* About Text */}
          <Col md={8} className="about-content">
            <h2>About Me</h2>
            <p>
              I'm Joy, a Computer Science graduate with a strong foundation in front-end development and a keen eye for design. I specialize in building responsive, user-friendly web interfaces using HTML, CSS, JavaScript, React, and Vite.
            </p>
            <p>
              My passion lies in crafting elegant layouts, solving real-world problems through code, and continuously learning new technologies. Whether it's refining UI/UX details or debugging tricky components, I approach challenges with curiosity and persistence.
            </p>
            <p>
              I'm currently focused on expanding my portfolio with practical projects like a Weather App, BMI Calculator, and Currency Converter—each designed to showcase both functionality and visual polish. I'm actively seeking opportunities to contribute to dynamic teams and grow as a developer.
            </p>
            <a href="#skills" className="btn ">
              View My Skills
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
