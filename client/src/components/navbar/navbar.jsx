import { useState, useEffect, useContext } from 'react';
import './navbar.css';

const Navbar = () => {

  return (
    <nav className="navbar">
      <img src="./logotipoo.png" alt="" />
      <ul className='navbar-list'>
        <li><a href="/">Servicios</a></li>
        <li><a href="/">Productos</a></li>
        <li><a href="/">Administración pública</a></li>
        <li><a href="/">Conócenos</a></li>
        <li><a href="/">Actualidad</a></li>
      </ul>
      <div className='navbar-buttons'> 
        <button>
          Contactar
        </button>
        <button>
          <img src="./carro-de-la-compra.png" alt="Logo carrito" />
          Tienda
        </button>
        <button>
          <img src="./search.png" alt="Logo lupa" />
        </button>
      </div>


    </nav>
  );
};

export default Navbar;
