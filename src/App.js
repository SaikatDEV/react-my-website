import React from "react";
// import Styled
import "./styles/_global.scss";
// import pages
import AboutUs from "./pages/AboutUs";
import NavBar from "./components/NavBar";
import ContactUs from "./pages/ContactUs";
import Certifications from "./pages/ExploreCertifications";

// Router
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" exact element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/certifications" element={<Certifications />} />
      </Routes>
    </div>
  );
}

export default App;
