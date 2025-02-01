import React from "react";
import Button from "../button/Button";
import "./Quienes.css";

const Quienes = () => {
    return (
        <div className="quienes">
            <div></div>
            <div></div>
            <div className="quienes-text">
                <h3>
                    Somos consultores de Accesibilidad Universal
                </h3>
                <p>
                    Nuestro objetivo es que todas las personas puedan desenvolverse en cualquier entorno con independencia y accedan a todos los recursos del mismo con facilidad.
                </p>
                <p>
                    Mira cómo podemos ayudarte a transformar tu proyecto, cumplir con las normativas y abrirlo a todas las personas.
                </p>
                <Button children={'Contacta con nosotros'} className={'contactar2'}>
                    Contacta con nosotros
                    <img src="./flecha-correcta.png" alt="Contacta con Nosotros" />
                </Button>
            </div>

        </div>
    );
};

export default Quienes;