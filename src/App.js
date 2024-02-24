import React from "react";
// import pages
import AboutUs from "./pages/AboutUs";

// import Styled
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AboutUs />
    </div>
  );
}

export default App;
