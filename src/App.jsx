import './App.css'
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from "react";
import { gsap } from "gsap";

import LandingScreen from "./pages/LandingScreen";
import Start from './pages/Start';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/start" element={<Start />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
