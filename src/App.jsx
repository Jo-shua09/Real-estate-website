import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="w-full overflow-hidden">
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
    </div>
  );
}

export default App;
