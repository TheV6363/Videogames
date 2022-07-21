import React from "react";
import styles from './Card.module.css';


export default function Card ({name,img,genres}){



    return(
        <div>
            <div className = {styles.row}>
            <div className = {styles.column}>
            <div className = {styles.card}>
            <div className ={styles.container}>
            <h2>Juego : {name}</h2>
            <img src={img} alt="No hay foto" width="250px" height="250px"/>
            <h3>Generos :{genres}</h3>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}