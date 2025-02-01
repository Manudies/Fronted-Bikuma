import './Hero.css';
import Navbar from '../navbar/Navbar';
import Button from '../button/Button';

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-container'>
                <div className='hero-text'>
                    <h1>¿Cumples con las normativas de accesibilidad universal?</h1>
                    <h2>Actualiza tu proyecto con accesibilidad en la información y lleva tu mensaje a todas las personas</h2>
                    <Button children={'Contacta con nosotros'} className={'contactar2'}>
                        Contacta con nosotros
                        <img src="./flecha-correcta.png" alt="Contacta con Nosotros" />
                    </Button>

                </div>
                <div className='hero-image'>
                    <div className='persona'>
                        <img src="./Ilustracion2.png" alt="Persona" />
                    </div>
                </div>
            </div>
        </div>

    );
  };
  
  export default Hero;