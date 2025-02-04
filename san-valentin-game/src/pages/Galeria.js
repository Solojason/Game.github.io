import React from "react";
import { useNavigate } from "react-router-dom";
import "./Galeria.css";

const Galeria = () => {
  const navigate = useNavigate();

  const images = [
    { id: 1, src: "/fotos/1.png", alt: "J", info: "Juntos siempre es mejor, porque cada momento contigo es especial." },
    { id: 2, src: "/fotos/2.jpg", alt: "E", info: "Eres la razón de mi felicidad, la luz que ilumina mis días." },
    { id: 3, src: "fotos/3.jpg", alt: "N", info: "Nunca olvides que mi cariño por ti es infinito y sincero." },
    { id: 4, src: "/fotos/4.jpg", alt: "N", info: "Nos complementamos de una manera única, creando un amor perfecto." },
    { id: 5, src: "/fotos/5.jpg", alt: "Y", info: "Ya no imagino mi vida sin ti, porque contigo todo tiene sentido." },
    { id: 6, src: "fotos/6.jpg", alt: "F", info: "Felices son aquellos que tienen el honor de conocerte, tu bondad es inmensa." },
    { id: 7, src: "/fotos/7.jpg", alt: "E", info: "Eres la estrella que brilla en mi universo, siempre tan brillante y hermosa." },
    { id: 8, src: "/fotos/8.jpg", alt: "R", info: "Riendo contigo, la vida se vuelve aún más hermosa y ligera." },
    { id: 9, src: "fotos/9.jpg", alt: "Amor", info: "El amor que compartimos es el motor que impulsa mi vida." },
    { id: 10, src: "/fotos/10.jpg", alt: "Ternura", info: "La ternura de tus abrazos es lo que me hace sentir en casa, sin importar el lugar." },
    { id: 11, src: "/fotos/11.jpg", alt: "Alma gemela", info: "Eres mi alma gemela, la persona que siempre estuvo destinada a estar a mi lado." },
    { id: 12, src: "fotos/12.jpg", alt: "Éxito", info: "Tu amor es mi mayor éxito, el que nunca quiero dejar de celebrar." },
    // Puedes agregar más imágenes aquí
  ];

  return (
    <div className="galeria-container">
      <h1>¡Gracias por decir "Sí"! 💖</h1>
      <div className="gallery">
        {images.map((image) => (
          <div key={image.id} className="image-card">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={image.src} alt={image.alt} />
                </div>
                <div className="flip-card-back">
                  <p>{image.info}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="music-container">
        <h2>Te amo mucho!</h2>
        <audio autoPlay loop>
            <source src="/music/Lover.mp3" type="audio/mp3" />
            Tu navegador no soporta el elemento de audio.
        </audio>
      </div>
      <button onClick={() => navigate("/pregunta")}>Volver</button>
    </div>
  );
};

export default Galeria;
