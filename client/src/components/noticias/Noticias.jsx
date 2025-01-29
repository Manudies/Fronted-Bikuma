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
  { id: 5, category: "Proyecto", title: "Políticas de accesibilidad en Kirguistán", image: "/C5.png" },
];

const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true, // Permite que el carrusel sea infinito
        speed: 500,
        slidesToShow: 3, // Muestra 3 tarjetas a la vez
        slidesToScroll: 1,
        centerMode: true, // Activa el modo centrado
        centerPadding: "0", // Sin padding adicional
        focusOnSelect: true, // Permite hacer clic para centrar
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              centerMode: false, // Desactiva el modo centrado en pantallas más pequeñas
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              centerMode: false, // Desactiva el modo centrado en pantallas más pequeñas
            },
          },
        ],
      };

      return (
        <div className="noticias">
            <h2>Conoce las últimas novedades de Puntodis</h2>
            <div className="carousel-container">
            <Slider {...settings}>
                {cards.map((card, index) => (
                <div key={card.id}>
                    <div className="card-container">
                    <div className="card">
                        <img src={card.image} alt={card.title} className="card-image" />
                        <div className="card-content">
                        <span className="category">{card.category}</span>
                        <h3>{card.title}</h3>
                        </div>
                    </div>
                    </div>
                </div>
                ))}
            </Slider>
            </div>
      </div>
  );
};

export default Carousel;
