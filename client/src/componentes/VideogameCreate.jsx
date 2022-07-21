import React from "react";
import { useEffect, useState } from "react";
import {Link , useHistory} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {postVideogame , getGenres} from "../actions"
import styles from './VideogameCreate.module.css'

function validate (input){
    let errors ={};
    if (!input.name){
        errors.name = "el nombre es un campo necesario";
    }
    if (input.rating > 5 || input.rating < 0){
        errors.rating = "el videojuego solo se puede rankear del 1 al 5"
    }
    if (input.description.lenght < 5){
        errors.description = "la descripcion debe tener al menos 5 caracteres"
} return errors
}

export default function VideogameCreate () {

    const Dispatch = useDispatch();
    const allGenres = useSelector((state)=> state.genres)
    const history = useHistory();
    const [errors, setErrors] =useState({})

    const platforms = [{id:1, name:'PC'},{id:2, name:'Playstation 3'},{id:3, name:'Playstation 4'},{id:4, name:'PC'},{id:5, name:'Xbox 360'},{id:6, name:'Xbox one'},{id:7, name:'Xbox series s/x'},{id:8, name:'MacOS'},{id:9, name:'Android'},{id:10, name:'Web'},{id:11, name:'Ps vita'},{id:12, name:'Linux'}];

    const [input, setInput] = useState({
        name: "",
        description: "",
        released: "",
        rating :"",
        img:"",
        genres :[],
        platforms:[]
    })

    useEffect(()=>{
        Dispatch(getGenres());
    },[Dispatch]);

    function handleChange (e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name] : e.target.value
        }))
    }

    function handleSelect (e){
             setInput({
                  ...input,
                 genres: [...input.genres, e.target.value]
            })
        }
    
    function handleSelect2 (e){
             setInput({
                  ...input,
                 platforms: [...input.platforms, e.target.value]
            })
        }

    function handleDelete(e){
            setInput({
                ...input,
                genres: input.genres.filter(el => el !== e)
            })
    }
    function handleDelete2(e){
        setInput({
            ...input,
            platforms: input.platforms.filter(el => el !== e)
        })
}
    

    function handleSubmit (e){
        e.preventDefault();
        console.log(input)
        Dispatch(postVideogame(input));
        alert("videojuego creado");
        setInput({
        name: "",
        description: "",
        released: "",
        rating :"",
        img:"",
        genres :[],
        platforms:[]
        })
        history.push("/home");
    }

    return(
        <div>
            <Link to="/Home"><button>Volver</button></Link>
            <h1>Creá tu videojuego</h1>
           
            <form>
                <div>
                    <label >NAME:  </label>
                    <input  type="text" value={input.name} name="name" onChange={e=> handleChange(e)}/>
                    {errors.name && (
                        <p>{errors.name}</p>
                    )}
                </div>
                <div>
                    <label >DESCRIPTION:  </label>
                    <input type="text" value={input.description} name="description" onChange={e=> handleChange(e)}/>
                       {errors.description && (
                        <p>{errors.description}</p>
                    )}
                </div>
                <div>
                    <label >RELEASED:  </label>
                    <input  type="date" value={input.released} name="released" onChange={e=> handleChange(e)}/>
                </div>
                <div>
                    <label >RATING:  </label>
                    <input  type="text" value={input.rating} name="rating" onChange={e=> handleChange(e)}/>
                       {errors.rating && (
                        <p>{errors.rating}</p>
                    )}
                </div>
                <div>
                    <label >IMAGE:  </label>
                    <input type="text" value={input.img} name="img" onChange={e=> handleChange(e)}/>
                </div>
                <label >GENRE:  </label>
                <select onChange={(e)=> handleSelect(e)}>
                  {allGenres?.map((g) => (<option value={g.name}>{g.name}</option>))}
              </select> 
              <div/> 
               <label>PLATFORM:  </label>
              <select onChange={(e)=> handleSelect2(e)}>
                   {platforms?.map((platforms) => (<option value={platforms.name}>{platforms.name}</option>))}
               </select> 
               <div/>
                <button type="Submit" onClick={(e)=>handleSubmit(e)}> Submit </button>
                {input.platforms.map(el=>
                    <div>
                    <p>{el}</p>
                    <label onClick={()=> {handleDelete2(el)}}>X</label>
                    </div>
                    )}
                    <div></div>
                    
                {input.genres.map(el=>
                    <div>
                    <p>{el}</p>
                    <label onClick={()=> {handleDelete(el)}}>X</label>
                    </div>
                    )}
            </form>

        </div>
    )
}