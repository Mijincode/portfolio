// import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

// export default function App() {
//   return (
//     <main>
//       <Navbar />
//       <About />
//       <Projects />
//       <Skills />
//       {/* <Testimonials /> */}
//       <Contact />
//     </main>
//   );
// }
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./Navbar";
import Home from "./components/Home";
// import About from "./About";
// import Projects from "./Projects";
// import Contact from "./Contact";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
