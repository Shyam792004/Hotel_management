import React from "react";
import "./footer.css";
import "@fortawesome/fontawesome-free/css/all.css";

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <div className="footerNav">
          <ul>
            <li>Blog</li>
            <li>News</li>
            <li>Services</li>
            <li>Company</li>
            <li>OurTeams</li>
          </ul>
        </div>
        <div className="socialIcons">
          <div>
            <i className="fa-brands fa-facebook" />
          </div>
          <div>
            <i className="fa-brands fa-instagram" />
          </div>
          <div>
            <i className="fa-brands fa-twitter" />
          </div>
          <div>
            <i className="fa-brands fa-pinterest" />
          </div>
          <div>
            <i className="fa-brands fa-whatsapp" />
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <p>
          All Copyright are reserved; Designed by
          <span className="designer">ShyamSundhar</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
