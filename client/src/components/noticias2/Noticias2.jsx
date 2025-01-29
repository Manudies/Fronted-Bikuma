import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Noticias2.css';

const cards = [
  { id: 1, category: "Turismo", title: "¿Tienes cita en Fitur? La accesibilidad estará en tu agenda", image: "/C1.png" },
  { id: 2, category: "Turismo", title: "¿Tienes cita en Fitur? La accesibilidad estará en tu agenda", image: "/C2.png" },
  { id: 3, category: "Análisis", title: "Piensa en más accesibilidad para personas con Asperger", image: "/C3.png" },
  { id: 4, category: "Proyecto", title: "Políticas de accesibilidad en Kirguistán", image: "/C4.png" },
  { id: 5, category: "Señalética", title: "Manual de señalización accesible", image: "/C5.png" },
];

const Noticias2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const getVisibleCards = () => {
    const result = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + cards.length) % cards.length;
      result.push({ ...cards[index], position: i });
    }
    return result;
  };

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">
        Conoce las últimas novedades<br />de Puntodis
      </h2>

      <div className="carousel-wrapper">
        <button
          onClick={prevSlide}
          className="carousel-button prev-button"
          aria-label="Anterior noticia"
        >
          <ChevronLeft />
        </button>

        <div className="carousel-track">
          {getVisibleCards().map((card) => {
            const position = card.position;
            const positionClass = 
              position === 0 ? 'card-center' :
              position === -1 ? 'card-left-1' :
              position === 1 ? 'card-right-1' :
              position === -2 ? 'card-left-2' :
              'card-right-2';

            return (
              <div
                key={card.id}
                className={`carousel-card ${positionClass}`}
              >
                <div className="card-inner">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="card-image"
                  />
                  <div className="card-content">
                    <span className="card-category">
                      {card.category}
                    </span>
                    <h3 className="card-title">
                      {card.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={nextSlide}
          className="carousel-button next-button"
          aria-label="Siguiente noticia"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Noticias2;