import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Feature from "../pages/feature";
import AuthPage from "../pages/auth";
import LearningPath from "../pages/learning";
import PaymentPage from "../pages/paymentPage";

const RoutePath = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route
          path="/course/:courseId/learn/:courseVideoId"
          element={<LearningPath />}
        />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </Router>
  );
};

export default RoutePath;
