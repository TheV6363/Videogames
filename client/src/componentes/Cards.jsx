import React from "react";
import styles from './Card.module.css';
import {useDispatch} from "react-redux"

export default function Card ({name,released,rating,platforms,img,genres,id}){
const Dispatch = useDispatch();


    return(
        <div>
            <div className = {styles.row}>
            <div className = {styles.column}>
            <div className = {styles.card}>
            <div className ={styles.container}>
            <h2>Juego : {name}</h2>
            <h4>Se lanzo :{released}</h4>
            <h4>Puntaje :{rating}</h4>
            <h3>Plataformas disponibles : {platforms}</h3>
            <img src={img} alt="No hay foto" width="200px" height="200px"/>
            <h3>Generos :{genres}</h3>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}