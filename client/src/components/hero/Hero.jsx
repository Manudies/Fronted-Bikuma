import './Hero.css';
import Navbar from '../navbar/Navbar';
import Button from '../button/Button';

const Hero = () => {
    return (
        <div className='hero'>
            <Navbar></Navbar>
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
                    <div className='cuadros'>
                        <img src="./señal.png" alt="Logo audición" />
                        <img src="./señan.png" alt="Logo silla de ruedas" />
                    </div>
                    <div className='fondo'></div>
                    <div className='persona'>
                        <img src="./Persona.png" alt="Persona" />
                    </div>
                    <div className='movil'>
                        <img src="./movil.png" alt="teléfono movil" />
                    </div>
                    <div className='qr'>
                        <img src="./qr.png" alt="código qr" />
                    </div>
                </div>
            </div>
        </div>

    );
  };
  
  export default Hero;