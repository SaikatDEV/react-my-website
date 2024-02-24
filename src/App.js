import React from "react";
// import pages
import AboutUs from "./pages/AboutUs";
import NavBar from "./components/NavBar";

// import Styled
import StyledGlobal from "./styles/StyledGlobal";

function App() {
  return (
    <div className="App">
      <StyledGlobal />
      <NavBar />
      <AboutUs />
    </div>
  );
}

export default App;
