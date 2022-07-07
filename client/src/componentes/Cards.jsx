import React from "react";

export default function Card ({name,released,rating,platforms,img,genres}){

    return(
        <div>
            <h4>Juego : {name}</h4>
            <h4>se lanzo :{released}</h4>
            <h4>ptje :{rating}</h4>
            <h4>plataformas disponibles : {platforms}</h4>
            <img src={img} alt="No hay foto" width="100px" height="100px"/>
            <h4>generos :{genres}</h4>
        </div>
    )
}