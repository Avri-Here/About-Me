import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-links-section">
        <a
              href="https://docs.google.com/document/d/1pXMp9FGny9bGaZEq64_NX8EVglRdx4TMKV2n47E0tAY/edit?rtpof=true&sd=true"
              target="_blank"
            >
              About{" "}
            </a>
          <Link to="/projects"> Projects </Link>
      </div>
    </footer>
  );
};

export default Footer;
