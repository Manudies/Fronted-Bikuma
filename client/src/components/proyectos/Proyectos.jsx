import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Proyectos.css";

const cards = [
  { id: 1, category: "Palma de Mallorca", title: "Manual de señalización accesible para un mundo más inclusivo", image: "/C1.png" },
  { id: 2, category: "Bilbao", title: "La estrategía integral para el fomento de la accesibilidad en bilbobus", image: "/Pr2.png" },
  { id: 3, category: "Bilbao", title: "Alhóndiga bilbao centro azkuna, pensando en la accesibilidad de todos", image: "/Pr3.png" },
  { id: 4, category: "Vila Joiosa", title: "Vilamuseu <<museos para todos>>", image: "/Pr4.png" },
  { id: 5, category: "Getxo", title: "La accesibilidad en el turismo entra ya en el siguiente nivel", image: "/Pr5.png" },
];

const Proyectos = () => {
    const settings = {
        className: "center",
        centerMode: false,
        infinite: true,
        centerPadding: "0",
        slidesToShow: 3,
        speed: 1000, // Velocidad de la transición en ms
        autoplaySpeed: 3000,
        autoplay: true, // Activa el desplazamiento automático
        pauseOnHover: true, // Pausa autoplay al pasar el mouse
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
            Proyectos de accesibilidad<br />universal
          </h2>
    
          <Slider {...settings}>
            {cards.map((card) => (
              <div key={card.id} className="card">
                <img src={card.image} alt={card.title} className="card-image" />
                <div className="card-content">
                  <h3 className="notice-card-title">{card.title}</h3>
                    <div className="notice-card-category-container">
                        <img src="/ubi2.png" alt="" />
                        <span className="notice-card-category">{card.category}</span>
                    </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      );
    };

export default Proyectos;