import React from "react";
import ServiceCard from "../serviceCard/ServiceCard.jsx";
import ProductosData from "../../data/productos.js";
import "./Productos.css";

const Product = () => {
  const servicesData = ProductosData;
  
  return (
    <div className="product-container">
        <div className="product-title">
            <h2>Productos</h2>
        </div>
        <div className="card-container3">
            {servicesData.map((service, index) => (
                <ServiceCard
                key={index}
                image={service.image}
                title={service.title}
                />
            ))}
        </div>
    </div>
  );
};

export default Product; 