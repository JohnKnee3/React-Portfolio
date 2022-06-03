import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  return (
    <Router basename="/React-Portfolio">
      <div className="content">
        <Header />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/React-Portfolio/" element={<About />} />
          {/* <Route path="/About" element={<About />} /> */}
          <Route path="/React-Portfolio/Project" element={<Project />} />
          <Route path="/React-Portfolio/Contact" element={<Contact />} />
          <Route path="/React-Portfolio/Resume" element={<Resume />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
