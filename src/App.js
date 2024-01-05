import React from "react"
import Navbar from "./Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  let Component = <></>;

  switch (window.location.pathname) {
    case "/":
      Component = <Home />;
      break;
    case "/about":
      Component = <About />;
      break;
    case "/contact":
      Component = <Contact />;
      break;
  }

  return (
    <>
      <Navbar />
      {Component}
    </>
  );
}

export default App;
