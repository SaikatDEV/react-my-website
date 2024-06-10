import React from "react";
// import Styled
import "./styles/_global.scss";
// import pages
import AboutUs from "./pages/AboutUs";
import NavBar from "./components/NavBar";
import ContactUs from "./pages/ContactUs";
import AllProjects from "./pages/AllProjects";
import GameDetails from "./components/GameDetails";
import SearchImage from "./pages/SearchImage";
import Certifications from "./pages/ExploreCertifications";
import MaterialUI from "./pages/MaterialUI";
import TailwindProject from "./pages/TailwindProject";

// Router
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" exact element={<AboutUs />} />
        <Route path="/projects" exact element={<AllProjects />} />
        <Route path="/projects/:id" exact element={<GameDetails />} />
        <Route path="/searchImage" exact element={<SearchImage />} />
        <Route path="/materialUI" exact element={<MaterialUI />} />
        <Route path="/tailwind" exact element={<TailwindProject />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route element={<AboutUs />} />
      </Routes>
    </div>
  );
};

// <Route path="/projects" exact element={<AllProjects />} />
// export as below,
// So we can export the App() function to index.js or any other page
export default App;
