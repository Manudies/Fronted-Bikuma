import React from "react";
import Button from "../button/Button";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img src="./logotipo.png" alt="Logo Puntodis" />
          <p>
            Actualiza con nosotros tu proyecto con accesibilidad en la
            información y lleva tu mensaje a todas las personas
          </p>
          <Button children={"Contactar"} className={"contactar3"}>
            Contactar
            <img src="./flecha-correcta.png" alt="Contacta con Nosotros" />
          </Button>
          <img src="./logos_Aenor.png" alt="Logos de Aenor" />
        </div>
        <div className="footer-section">
          <ul>
            <li>Productos</li>
            <li>Servicios</li>
            <li>Administración pública</li>
            <li>Conócenos</li>
            <li>Actualidad</li>
            <li>Tienda</li>
          </ul>
        </div>
        <div class="newsletter-section">
          <h2>¿Quieres estar al día con las noticias de accesibilidad?</h2>
          <p>Suscríbete a la newsletter</p>
          <form class="newsletter-form">
            <input type="text" placeholder="Nombre" required />
            <input type="email" placeholder="Email" required />
            <label>
              <input type="checkbox" required />
              Acepto la política de privacidad
            </label>
            <Button children={"Suscribirme"} className={"suscribirme"}></Button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
