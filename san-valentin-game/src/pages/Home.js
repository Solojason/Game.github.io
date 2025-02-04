import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Agregaremos estilos personalizados

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="fade-in">El amor es la magia que une corazones ❤️</h1>
      <p className="fade-in">Antes de responder... ¡Resuelve un pequeño reto!</p>
      <button className="start-btn" onClick={() => navigate("/laberinto")}>
        Comenzar 💖
      </button>
    </div>
  );
};

export default Home;
