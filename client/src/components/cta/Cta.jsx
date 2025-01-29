import React from "react";
import ServiceCard from "../serviceCard/ServiceCard.jsx";
import CtaData from "../../data/cta.js";
import "./Cta.css";

const Services = () => {
  const servicesData = CtaData;
  
  return (
    <div className="services-container">
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
  );
};

export default Services;