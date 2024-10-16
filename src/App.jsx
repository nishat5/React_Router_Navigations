import React from "react";
import "./App.css";

//Imports for React Router (Page Navigations)

import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import News from "./Components/News";
import Contact from "./Components/Contact";

function App() {
  return (
    <div>
      {/* Code for React Router (Page Navigations) */}

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
