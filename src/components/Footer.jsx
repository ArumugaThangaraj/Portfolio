import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer-data">
          <h2>Portfolio</h2>
          <p>© {new Date().getFullYear()} All Rights Reserved</p>
        </div>

      <div className="footer-links d-sm-flex flex-row">
        <a  href="https://github.com/ArumugaThangaraj/" target="_blank" rel="noreferrer">
          <FaGithub size={24} />
        </a>
        <a  href="https://www.linkedin.com/in/arumuga-thangaraj123/" target="_blank" rel="noreferrer">
          <FaLinkedin size={24} />
        </a>
        <a href="mailto:arumugathangaraj123@gmail.com">
          <FaEnvelope size={24} />
        </a>
      </div>
    </footer>
  );
}
