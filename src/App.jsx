import './App.css'
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from "react";
import { gsap } from "gsap";
import Presentacion from './pages/Presentacion';
import LandingScreen from "./pages/LandingScreen";
import Start from './pages/Start';
import Questionary from './pages/Questionary';
import Feedback from './pages/Feedback';
import Comienzo from './pages/Comienzo';
import { checkPendingResponses } from './pages/firebaseBackup';





function App() { 
   useEffect(() => {
    // Verificar respuestas pendientes al cargar la app
    checkPendingResponses();
    
    // También verificar cada 5 minutos por si acaso
    const interval = setInterval(checkPendingResponses, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/start" element={<Start />} />
        <Route path="/presentacion" element={<Presentacion />} />
        <Route path="/comienzo" element={<Comienzo />} />
        <Route path="/test" element={<Questionary />} />
        <Route path="/resultados" element={<Feedback />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
