// import './App.css';
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import Content from "./pages/Content";
import Navbar from "./component/Navbar";
import About from "./pages/About";
import React from "react";
import Footer from "./component/Footer";
import Leagues from "./pages/Leagues";
// import Navigation from "./pages/Navigation";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* <About /> */}
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/content" element={<Content />} />
          <Route path="/leagues" element={<Leagues />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
