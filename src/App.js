import React from "react";
// import Styled
import "./styles/_global.scss";
// import pages
import AboutUs from "./pages/AboutUs";
import NavBar from "./components/NavBar";
import ContactUs from "./pages/ContactUs";
import AllProjects from "./pages/AllProjects";
import SearchImage from "./pages/SearchImage";
import Certifications from "./pages/ExploreCertifications";
import MaterialUI from "./pages/MaterialUI";
import MyPlanner from "./pages/MyPlanner";
import Trip from "./pages/Trip";
import LoginPage from "./components/LoginPage"; // Add your login page
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

// Router
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <AuthProvider>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/searchImage" element={<SearchImage />} />
          <Route path="/materialUI" element={<MaterialUI />} />
          <Route path="/myPlanner" element={<MyPlanner />} />
          <Route
            path="/trip"
            element={
              <PrivateRoute>
                <Trip />
              </PrivateRoute>
            }
          />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<AboutUs />} />
        </Routes>
      </div>
    </AuthProvider>
  );
};

export default App;
