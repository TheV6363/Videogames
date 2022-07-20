import React from "react";
import styles from "./Paginado.module.css"

export default function Paginado({videogamesPerPage, AllVideogames, paginado}){
    const pageNumbers = []
// CON EL FOR VOY A IR PUSHEANDO TODOS LOS NUMEROS POSIBLES DE PAGINA.
    for( let i=0; i < Math.ceil(AllVideogames/videogamesPerPage); i++){
        pageNumbers.push(i +1)
    }
    //AHORA VOY A RETORNAR UN MAPEO DEL ARREGLO Y LO VOY A PONER EN BOTONES.
    return (
        <nav>
          <ul className="paginado">
            {pageNumbers && pageNumbers.map(number => {return(
              
              <li className={styles.numbers} key={number}>
                <button className={styles.btn} onClick={(e) => paginado(number)}>
                  {number}
                </button>
              </li>
            )})}
          </ul>
        </nav>
      );

}