import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          Designed & Developed by <span>Karan Goplani </span> 
          Visit my{" "}
          <a href="https://karangoplani72.github.io/karan_portfolio_/" style={{ color: "#D4AF37" }}>
            Portfolio
          </a>
        </p>
        <div className="footer-socials">
          <a href="https://github.com/karangoplani72" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/karangoplani72" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://instagram.com/karangoplani72" target="_blank" rel="noreferrer"><FaInstagram /></a>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
