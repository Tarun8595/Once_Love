import React from "react";
import "./index.css";

const Footer = () => {
  const brand = "GTSYNTAX";

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* LEFT SECTION */}
        <div className="footer-left">
          <h1 className="logo">Once Love</h1>
          <p className="coming">Coming Early 2026</p>
        </div>

        {/* MIDDLE SECTION */}
        <div className="footer-middle">

          <div className="footer-column">
            <h3>Let's Talk</h3>
            <p>3gtsyntax@gmail.com</p>
          </div>

          <div className="footer-column">
            <h3>Links</h3>
            <ul>
                <li><a href="#Home">Home</a></li>
                <li><a href="#Story">Story</a></li>
                <li><a href="#Gallery">Gallery</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-column explore">
            <a href="https://gtsyntax.com/" target="_blank" className="explore-link">Explore More</a>
            <p className="agency-text">
              GTSYNTAX is a modern web development agency focused on building
              high-performance websites, scalable web apps, and creative
              digital experiences that help brands grow online.
            </p>

            <div className="footer-social-icons">
              <a href="https://www.instagram.com/gtsyntax/" className="social_icon"><img src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png" alt="insatgram" /></a>
              <a href="https://www.linkedin.com/in/tarun-kushwaha-web/" className="social_icon"><img src="https://cdn-icons-png.flaticon.com/128/4494/4494497.png" alt="linkdin" /></a>
              <a href="https://github.com/Tarun8595" className="social_icon"><img src="https://cdn-icons-png.flaticon.com/128/11378/11378785.png" alt="github" /></a>
           </div>
          </div>

        </div>
      </div>

      {/* BIG BRAND TEXT */}
      <div className="big-brand">
        {brand.split("").map((letter, index) => (
          <span key={index} className="letter">
            {letter}
          </span>
        ))}
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 Gtsyntax. All Rights Reserved.</p>
        <p><u>Site created by Tarun</u></p>
      </div>
    </footer>
  );
};

export default Footer;