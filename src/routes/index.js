import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Feature from "../pages/feature";

const RoutePath = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feature" element={<Feature />} />
      </Routes>
    </Router>
  );
};

export default RoutePath;
