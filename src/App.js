import React from "react";
// import Styled
import StyledGlobal from "./styles/StyledGlobal";
// import pages
import AboutUs from "./pages/AboutUs";
import NavBar from "./components/NavBar";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
// Router
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <StyledGlobal />
      <NavBar />
      <Routes>
        <Route path="/" exact element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/work" element={<OurWork />} />
      </Routes>
    </div>
  );
}

export default App;
