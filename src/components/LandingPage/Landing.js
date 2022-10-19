import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";

const Landing = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};

export default Landing;
