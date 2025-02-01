import { useState } from "react";
import "./Navbar.css";
import Button from "../button/Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <img src="./logotipoo.png" alt="Logo" />
        <ul className="navbar-list">
          <li>
            <a href="/">Servicios</a>
          </li>
          <li>
            <a href="/">Productos</a>
          </li>
          <li>
            <a href="/">Administración pública</a>
          </li>
          <li>
            <a href="/">Conócenos</a>
          </li>
          <li>
            <a href="/">Actualidad</a>
          </li>
        </ul>
        <button className="menu-toggle" onClick={toggleMenu}>
          <span>☰</span>
        </button>
        <div className="navbar-buttons">
          <Button children={"Contactar"} className={"contactar"}></Button>
          <Button children={"Tienda"} className={"tienda"}>
            <img src="./carro-de-la-compra.png" alt="Logo carrito" />
            Tienda
          </Button>
          <Button className={"lupa"}>
            <img src="./search.png" alt="Logo lupa" />
          </Button>
        </div>
      </nav>
      {/* Menú desplegable */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-buttons">
          <Button children={"Contactar"} className={"contactar"}></Button>
          <Button children={"Tienda"} className={"tienda"}>
            <img src="./carro-de-la-compra.png" alt="Logo carrito" />
            Tienda
          </Button>
          <Button className={"lupa"}>
            <img src="./search.png" alt="Logo lupa" />
          </Button>
        </div>
        <ul className="mobile-links">
          <li>
            <a href="/">Servicios</a>
          </li>
          <li>
            <a href="/">Productos</a>
          </li>
          <li>
            <a href="/">Administración pública</a>
          </li>
          <li>
            <a href="/">Conócenos</a>
          </li>
          <li>
            <a href="/">Actualidad</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
