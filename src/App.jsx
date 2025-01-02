import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import { ToastContainer, toast } from "react-toastify";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer />

      <div className="Header-section">
        <Header />
      </div>

      <div className="About-section">
        <About />
      </div>

      <div className="Project-section">
        <Projects />
      </div>

      <div className="Testimonial-section">
        <Testimonials />
      </div>

      <div className="Contact-section">
        <Contact />
      </div>

      <div className="Footer-section">
        <Footer />
      </div>
    </div>
  );
}

export default App;
