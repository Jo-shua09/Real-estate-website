import React from "react";
import Header from "./components/Header";
import About from "./components/About";

function App() {
  return (
    <div className="w-full overflow-hidden">
      <div className="Header-section">
        <Header />
      </div>

      <div className="About-section">
        <About />
      </div>
    </div>
  );
}

export default App;
