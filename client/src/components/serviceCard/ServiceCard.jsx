import React from "react";
// import "./ServiceCard.css";

const ServiceCard = ({ image, title, description1, description2 }) => {
  return (
    <div className="service-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description1}</p>
      <p>{description2}</p>
    </div>
  );
};

export default ServiceCard;