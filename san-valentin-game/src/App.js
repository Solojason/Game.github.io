import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Laberinto from "./pages/Laberinto";
import Pregunta from "./pages/Pregunta";
import Galeria from "./pages/Galeria";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/laberinto" element={<Laberinto />} />
        <Route path="/pregunta" element={<Pregunta />} />
        <Route path="/galeria" element={<Galeria />} />
      </Routes>
    </Router>
  );
};

export default App;
