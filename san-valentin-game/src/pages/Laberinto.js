import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Laberinto.css";

const gridSize = 5; // Tamaño del laberinto (5x5)
const initialPosition = { x: 0, y: 0 };
const goalPosition = { x: gridSize - 1, y: gridSize - 1 };

const Laberinto = () => {
  const [player, setPlayer] = useState(initialPosition);
  const [completed, setCompleted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event) => {
      setPlayer((prev) => {
        let newPos = { ...prev };
        if (event.key === "ArrowUp" && prev.y > 0) newPos.y--;
        if (event.key === "ArrowDown" && prev.y < gridSize - 1) newPos.y++;
        if (event.key === "ArrowLeft" && prev.x > 0) newPos.x--;
        if (event.key === "ArrowRight" && prev.x < gridSize - 1) newPos.x++;
        return newPos;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (player.x === goalPosition.x && player.y === goalPosition.y) {
      setCompleted(true);
    }
  }, [player]);

  return (
    <div className="maze-container">
      <h2>¡Muévete con las flechas para llegar a la meta! 🏁</h2>
      <div className="maze">
        {Array.from({ length: gridSize }).map((_, row) => (
          <div key={row} className="row">
            {Array.from({ length: gridSize }).map((_, col) => (
              <div
                key={col}
                className={`cell ${player.x === col && player.y === row ? "player" : ""} ${
                  goalPosition.x === col && goalPosition.y === row ? "goal" : ""
                }`}
              />
            ))}
          </div>
        ))}
      </div>
      {completed && (
        <button className="continue-btn" onClick={() => navigate("/pregunta")}>
          Continuar 💖
        </button>
      )}
    </div>
  );
};

export default Laberinto;
