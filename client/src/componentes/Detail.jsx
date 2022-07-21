import React from "react";
import {getVideogamesById,Clear,deleteVideogames} from "../actions/index"
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useHistory} from "react-router-dom";
import "./Detail.module.css"


export default function Detail (props){
const gameById = useSelector(state=> state.detail);
const Dispatch = useDispatch ();
const history = useHistory()
console.log(props)  //props.match.params.id


useEffect(() => {
    Dispatch(getVideogamesById(props.match.params.id));
    return () => {
        Dispatch (Clear())}
},[Dispatch])

function handleDelete(e){
    e.preventDefault();
    Dispatch(deleteVideogames(props.match.params.id))
    alert("Eliminado con exito")
    history.push("/home");
    }

    return(

        <div>
            <h1>{gameById?.name}</h1>
            <img src={gameById?.image} alt="No hay foto" width="400px" height="400px"/>
            <p>{gameById?.description}</p>
            <h3>SCORE:  {gameById?.rating}</h3>
            <h3>GENRES:  {gameById?.genres}</h3>
            <h3>PLATFORMS:  {gameById?.platforms}</h3>
            <h3>RELEASED:  {gameById?.released}</h3>
            <button onClick={e=> handleDelete(e)}>X</button>

        </div>

    )
}