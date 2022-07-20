import React from "react";
import { Link } from "react-router-dom";
import {titulo,boton} from './LandingPage.module.css'




export default function LandingPage () {

    return(
        <div>
           <div>
            <h1 className={titulo}>Bienvenido a la Pagina de Videogames</h1>
            <Link to="/home">
            <button className={boton}>Ingresar a Home</button>
            </Link>
        </div>
        </div>
    )
};