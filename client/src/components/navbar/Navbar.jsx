//import { useState, useEffect, useContext } from 'react';
import './Navbar.css';
import Button from '../button/Button';
//import {button} from './button.css';

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
        <Button children={'Contactar'} className={'contactar'}></Button>
        <Button children={'Tienda'} className={'tienda'}>
          <img src="./carro-de-la-compra.png" alt="Logo carrito" />
          Tienda
        </Button>
        <Button className={'lupa'}> 
          <img src="./search.png" alt="Logo lupa" />
        </Button>
      </div>


    </nav>
  );
};

export default Navbar;
