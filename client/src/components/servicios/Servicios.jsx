import React from "react";
import ServiceCard from "../serviceCard/ServiceCard.jsx";
import ServiciosData from "../../data/servicios.js";
import "./Servicios.css";

const Services = () => {
  const servicesData = ServiciosData;
  
  return (
    <div className="services-container2">
        <div className="services-title2">
            <h2>Servicios</h2>
        </div>
        <div className="card-container2">
            {servicesData.map((service, index) => (
                <ServiceCard
                key={index}
                image={service.image}
                title={service.title}
                description1={service.description1}
                description2={service.description2}
                />
            ))}
        </div>
    </div>
  );
};

export default Services; 