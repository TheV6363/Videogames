import React from "react";
import {getVideogamesById} from "../actions/index"
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";


export default function Detail (props){
const gameById = useSelector(state=> state.detail);
const Dispatch = useDispatch ();

useEffect(() => {
    Dispatch(getVideogamesById(props.match.params.id));
    },[Dispatch])

    return(
        <div>
            <h1>{gameById?.name}</h1>
            <img src={gameById?.image} alt="No hay foto" width="400px" height="400px"/>
            <p>{gameById?.description}</p>
            <h3>{gameById?.rating}</h3>
            <h3>{gameById?.genres}</h3>
            <h3>{gameById?.platforms}</h3>

        </div>

    )
}