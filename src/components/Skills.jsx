
import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";
import "../App.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML", level: 80 },
        { name: "CSS", level: 75 },
        { name: "JavaScript", level: 65 },
        { name: "React.js", level: 50 },

      ]
    },
    {
      title: "Frameworks & Programming",
      skills: [
        { name: "Bootstrap", level:50 },
        { name: "Next.js", level: 30},
        { name: "Tailwind CSS", level: 40 },
        { name: "Python", level: 40 }
            
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git & GitHub", level: 70 },
        { name: "Postman", level: 70 },
        { name: "VS Code", level: 90 }

      ]
    }
  ];

  return (
    <section className="skills" id="skills">
      <Container>
        <h2 className="text-center">My Skills</h2>
        <Row>
          {skillCategories.map((category, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="skill-card">
                <Card.Body>
                  <Card.Title className="skill-title">{category.title}</Card.Title>
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="mb-3">
                      <h6 className="skill-name">{skill.name}</h6>
                      <ProgressBar
                        now={skill.level}
                        label={`${skill.level}%`}
                        variant="custom"
                      />
                    </div>
                  ))}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
