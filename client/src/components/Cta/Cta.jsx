import React from 'react';
import './Cta.css';

const Services = () => {
  return (
    <div className="services-container">
      <div className="service-card">
        <div className="service-text">
            <img src="./Braile1.png" alt="" />
            <h2>Tienda online</h2>
            <p>Mauris et turpis tellus.</p>
            <p>Nullam facilisis, arcu quis lobortis gravida.</p>
        </div>
      </div>
      <div className="service-card">
        <img src="./Braile2.png" alt="" />
        <h2>Administración pública</h2>
        <p>Mauris et turpis tellus.</p>
        <p>Nullam facilisis, arcu quis lobortis gravida.</p>
      </div>
      <div className="service-card">
        <img src="./Braile3.png" alt="" />
        <h2>Fabricamos a medida</h2>
        <p>Mauris et turpis tellus.</p>
        <p>Nullam facilisis, arcu quis lobortis gravida.</p>
      </div>
      <div className="service-card">
        <img src="./Braile4.png" alt="" />
        <h2>Digitalización accesible</h2>
        <p>Mauris et turpis tellus.</p>
        <p>Nullam facilisis, arcu quis lobortis gravida.</p>
      </div>
    </div>
  );
};

export default Services;