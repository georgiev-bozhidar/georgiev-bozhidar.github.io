/* import { useState } from "react"; */
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

/*
/img/andrea-de-santis-g6nPslCoXDs-unsplash.jpg
/img/neom-g6Me5mUQQIQ-unsplash.jpg
/img/neom-s0A8sa9oasY-unsplash.jpg
/img/neom-tuEtpjghVmg-unsplash.jpg
/img/samuel-arkwright-_V4dS5_NFfs-unsplash.jpg
/img/trevor-vannoy-GtWsGhRdrss-unsplash.jpg
 */
