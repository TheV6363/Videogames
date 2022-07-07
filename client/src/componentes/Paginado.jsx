import React from "react";

export default function Paginado({videogamesPerPage, AllVideogames, paginado}){
    const pageNumbers = []  // ME VA A QUEDAR UN ARREGLO COMO [1,2,3...]
// CON EL FOR VOY A IR PUSHEANDO TODOS LOS NUMEROS POSIBLES DE PAGINA.
    for( let i=0; i <= Math.ceil(AllVideogames/videogamesPerPage); i++){
        pageNumbers.push(i + 1)
    }
    //AHORA VOY A RETORNAR UN MAPEO DEL ARREGLO Y LO VOY A PONER EN BOTONES.
    return (
        <nav>
          <ul className="paginado">
            {pageNumbers && pageNumbers.map(number => {return(
              
              <li className="cualquiercosa" key={number}>
                <button onClick={(e) => paginado(number)}>
                  {number}
                </button>
              </li>
            )})}
          </ul>
        </nav>
      );

}