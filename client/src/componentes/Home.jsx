import React from "react";
import Card from "./Cards";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import {getVideogames} from "../actions/index"
import {Link} from "react-router-dom"
import Paginado from "./Paginado";

export default function Home () {


const Dispatch = useDispatch ();
const AllVideogames = useSelector((state=>state.videogames));
const [currentPage, setCurrentPage] =useState(1);
const [videogamesPerPage, setVideogamesPerPage] = useState(9);
const indexOfLastVideogames = currentPage * videogamesPerPage; 
const indexOfFirstVideogames = indexOfLastVideogames - videogamesPerPage;
const currentVideogames = AllVideogames.slice(indexOfFirstVideogames, indexOfLastVideogames);

const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
};
useEffect(() => {
    Dispatch(getVideogames());
    },[Dispatch])


    
    return(
        <div>
            { currentVideogames && currentVideogames.map(e=>{
            return(
            <Card
            name= {e.name}
            released= {e.released}
            rating= {e.rating}
            platforms= {e.platforms}
            img= {e.img}
            genres= {e.genres}
            />)})}
            <Paginado
                    videogamesPerPage ={videogamesPerPage}
                    AllVideogames ={AllVideogames.length}
                    paginado ={paginado}
                />
        
        </div>
    )
};