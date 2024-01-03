// AboutPage.js
import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">Welcome to Dreamland Inn</h1>
      <p>
        At LeMeridean, we believe in providing unparalleled hospitality
        experiences that go beyond expectations. Nestled at the heart of
        [Location], our hotel is a testament to luxury, comfort, and exceptional
        service.
      </p>

      <h2 className="about-heading">Our Story</h2>
      <p>
        Established in [Year], Dreamland Inn has been a beacon of elegance in
        the hospitality industry. From our humble beginnings to becoming a
        renowned name in the region, our journey has been guided by a commitment
        to excellence and a passion for creating memorable moments.
      </p>

      <h2 className="about-heading">Our Mission</h2>
      <p>
        At Dreamland Inn, our mission is to redefine the art of hospitality. We
        strive to create an ambiance that combines sophistication with warmth,
        ensuring every guest feels at home. Our dedicated team is committed to
        providing personalized services and exceeding the expectations of our
        valued guests.
      </p>
      <div className="about-headingA">
        <h2 className="about-heading1">What Sets Us Apart</h2>
        <ul>
          <li>
            <h4>Guest Services:</h4>
            {/* <img
              src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="sd"
            /> */}
            <img
              src={
                "https://plus.unsplash.com/premium_photo-1661416415130-2e6cf748dff2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjAlMjByZWNlcHRpb258ZW58MHx8MHx8fDA%3D"
              }
              alt="Informational"
              style={{ maxWidth: "95%", maxHeight: "400px" }}
            />
          </li>
          <li>
            <h4>TastyFoods</h4>
            <img
              src={
                "https://images.unsplash.com/photo-1605651531144-51381895e23d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJvb20lMjBzZXJ2aWNlfGVufDB8fDB8fHww"
              }
              alt="Informational"
              style={{ maxWidth: "100%", maxHeight: "400px" }}
            />
          </li>
          <li>
            <h4>Room Serives:</h4>
            <img
              src={
                "https://media.istockphoto.com/id/1225818780/photo/housekeeper-making-the-bed-at-a-hotel.jpg?s=2048x2048&w=is&k=20&c=7WAOmjubymKP9oFODMxqo7WqM83PaOzmcMyU-vrlXF4="
              }
              alt="Informational"
              style={{ maxWidth: "100%", maxHeight: "400px" }}
            />
          </li>
          <li>
            <h4>Views From Us:</h4>
            <img
              src={
                "https://images.unsplash.com/photo-1670540797398-8083557d2323?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW4lMjB2aWV3JTIwZnJvbSUyMGhvdGVsfGVufDB8fDB8fHww"
              }
              alt="Informational"
              style={{ maxWidth: "100%", maxHeight: "400px" }}
            />
          </li>
        </ul>

        <h2 className="about-heading2">Our Team</h2>
        <p>
          Meet the faces behind LeMeridean - a passionate team dedicated to
          ensuring your stay is nothing short of extraordinary. Our staff
          embodies the spirit of hospitality, always ready to assist and make
          your experience truly memorable.
        </p>
        <img
          src="https://images.unsplash.com/photo-1510146758428-e5e4b17b8b6a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGVhbXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Our Team"
          style={{
            paddingLeft: "230px",
            maxWidth: "3500px",
            maxHeight: "1800px",
          }}
        />
        <p>
          Thank you for choosing LeMeridean. We look forward to welcoming you
          with open arms and creating lasting memories together.
        </p>
      </div>
    </div>
  );
};

export default About;
