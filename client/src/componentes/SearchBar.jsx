import React from "react";
import {getNameGames} from "../actions/index"
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function SearchBar () {
const [name, setName] = useState("")
const Dispatch = useDispatch ()


function handleInputChange(e){
    e.preventDefault();
    setName(e.target.value)
}
function handleSubmit (e){
    e.preventDefault();
    Dispatch(getNameGames(name))
}

    return(
        <div>
            <input type="Text" placeholder="Buscar..." onChange={e=> handleInputChange(e)}/>
            <button type="Submit" onClick={e=> handleSubmit(e)}> Submit </button>
        </div>
    )
};