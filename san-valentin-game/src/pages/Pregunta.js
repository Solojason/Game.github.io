import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Pregunta.css";

const Pregunta = () => {
  const navigate = useNavigate();
  const [noPosition, setNoPosition] = useState({ top: "52%", left: "50%" });

  const moveNoButton = () => {
    const randomX = Math.random() * 80 + 10; // Evita irse fuera de pantalla
    const randomY = Math.random() * 80 + 10;
    setNoPosition({ top: `${randomY}%`, left: `${randomX}%` });
  };

  return (
    <div className="pregunta-container">
      <h1 className="pregunta-text">¿Quieres ser mi San Valentín? 💖</h1>
      <div className="buttons-container">
        <button className="yes-btn" onClick={() => navigate("/galeria")}>
          Sí 💘
        </button>
        <button
          className="no-btn"
          style={{ top: noPosition.top, left: noPosition.left }}
          onMouseEnter={moveNoButton}
        >
          No 💔
        </button>
      </div>
    </div>
  );
};

export default Pregunta;
