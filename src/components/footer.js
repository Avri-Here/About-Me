import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <div className="footer-links-section">
          <Link to="/about"> About </Link>
          <Link to="/work"> Projects </Link>
          <Link to="/blog"> Blog</Link>
          <a href="mailto:Yoti1492@gmail.com"> Email </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
