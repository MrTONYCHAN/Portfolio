import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import Login from "./components/Form";
// import ToggleDark from "./components/ToggleDark";


import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { ThemeContext, themes } from './components/themeContext';
// import { Button, InputGroup } from "react-bootstrap";

function App() {
  const [load, upadateLoad] = useState(true);
  // const [darkMode, setDarkMode] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>

      <Router>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <ScrollToTop />
          {/* <button onClick={themes}>ToggleDark</button> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/form" element={<Login />} />
            <Route path="*" element={<Navigate to="/" />} />
            
          </Routes>
          <Footer />
        </div>
      </Router >
    </div>
  );
}

export default App;
