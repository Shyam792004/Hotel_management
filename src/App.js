import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Landing from "./Components/Landing";
// import Foods from "./Components/Foods";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Offers from "./Components/Offers";
import Register from "./Components/Register";
import Rooms from "./Components/Rooms";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Components/Dashboard";
// import Gallery from "./Components/Gallery";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/home"
          element={
            <>
              <Sidebar />
              <Home />
              <Navbar />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <Sidebar />
              <About />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Sidebar />
              <Contact />
            </>
          }
        />
        <Route
          path="/landing"
          element={
            <>
              <Navbar />
              <Sidebar />
              <Landing />
            </>
          }
        />
        {/* <Route
          path="/foods"
          element={
            <>
              <Navbar />
              <Sidebar />
              <Foods />
            </>
          }
        /> */}
        <Route
          path="/dashboard"
          element={
            <>
              <Navbar />
              <Sidebar />
              <Dashboard />
            </>
          }
        />

        <Route path="/" element={<Login />} />
        <Route
          path="/offers"
          element={
            <>
              <Navbar />
              <Sidebar />
              <Offers />
            </>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/rooms"
          element={
            <>
              <Navbar />
              <Sidebar className="rooms-page" />{" "}
              {/* Added the new class name */}
              <Rooms />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
