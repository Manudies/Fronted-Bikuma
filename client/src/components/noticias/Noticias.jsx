import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Noticias.css"; // Archivo de estilos

const cards = [
  { id: 1, category: "Señalética", title: "Manual de señalización accesible", image: "/C1.png" },
  { id: 2, category: "Turismo", title: "¿Tienes cita en Fitur? La accesibilidad estará en tu agenda", image: "/C2.png" },
  { id: 3, category: "Análisis", title: "¿Tienes cita en Fitur? La accesibilidad estará en tu agenda", image: "/C3.png" },
  { id: 4, category: "Proyecto", title: "Piensa en más accesibilidad para personas con Asperger", image: "/C4.png" },
  { id: 5, category: "Proyecto", title: "Polideportivos con accesibilidad en Bilbao Kirolak", image: "/C5.png" },
];

const Noticias = () => {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: false,
    centerPadding: "0",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024, // Ajustes para pantallas medianas
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Ajustes para pantallas pequeñas
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">
        Conoce las últimas novedades<br />de Puntodis
      </h2>

      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id} className="card">
            <img src={card.image} alt={card.title} className="card-image" />
            <div className="card-content">
              <span className="card-category">{card.category}</span>
              <h3 className="card-title">{card.title}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Noticias;