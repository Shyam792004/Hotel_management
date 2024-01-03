// ContactUsPage.js
import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contactus-container">
      <div className="info">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you! Please feel free to contact us using the
          information below.
        </p>
      </div>
      <div className="info-image">
        <img
          src={
            "https://images.unsplash.com/photo-1561501900-3701fa6a0864?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwaG90ZWx8ZW58MHx8MHx8fDA%3D"
          }
          alt="Informational"
        />
      </div>
      <div className="bottom-elements">
        <div className="contact-info">
          <h1>Location</h1>
          <div class="item123">
            <div className="info-item1">
              <h3>Address</h3>
              <p>123 Main Street, Cityville, Country</p>
            </div>

            <div className="info-item2">
              <h3>Email</h3>
              <p>info@example.com</p>
            </div>

            <div className="info-item3">
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        <div className="brands">
          <h1>Services</h1>
          <p>London</p>
          <p>Australia</p>
          <p>Tokyo</p>
          <p>Coimbatore</p>
          <p>Bangalore</p>
          {/* Add more brands as needed */}
        </div>

        {/* <div className="contact-form">
          <h2>Get in Touch</h2>
          <form>
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Your Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div> */}

        <div className="contact-form">
          <h1>Also Reach Us</h1>
          <div className="social-icons">
            {/* Add your social media icons here */}
            {/* For example, using Font Awesome icons */}
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-pinterest"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
