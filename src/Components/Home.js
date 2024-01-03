import React from "react";
import Footer from "./Footer";
import "./home.css";
import LeMeridean from "../Components/LeMeridean.mp4";

const Home = () => {
  return (
    <div>
      <video
        width="2048"
        height="1365"
        className="video-background"
        autoPlay
        loop
        muted
      >
        <source src={LeMeridean} type="video/mp4" />
      </video>
      <Footer />
    </div>
  );
};

export default Home;
