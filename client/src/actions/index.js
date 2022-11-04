import axios from "axios";


//DISPATCH, EXPORTA SOLO LAS ACCIONES AL REDUCER SIN TENER QUE IMPORTARLAS
export function getVideogames (){
    return async function(dispatch){
        var json = await axios.get("/Videogames");
     return dispatch({
        type: "GET_VIDEOGAMES",
        payload: json.data
    })
}
}
export function getVideogamesById (id){
    return async function(dispatch){
        var json = await axios.get("/Videogames/"+id);
     return dispatch({
        type: "GET_VIDEOGAMES_BY_ID",
        payload: json.data
    })
}
}
export function Clear(){
    return {
        type : 'CLEAR'
    }
}

// FUNCION PARA TRARME TODOS LOS GENEROS
export function getGenres (){
    return async function(dispatch){
        var genres = await axios.get("/Genres");
     return dispatch({
        type: "GET_GENRES",
        payload: genres.data
    })
}
}
// FUNCION PARA CREAR EL VIDEOJUEGO
export function postVideogame (payload){
    return async function(dispatch){
        var createVideogames = await axios.post("/Videogames", payload);
        console.log(createVideogames)
        return createVideogames;
}
}
export function getNameGames (name){
    try{
      return async function(dispatch){
          var json = await axios.get("/Videogames?name=" + name);
       return dispatch({
          type: "GET_NAME_GAMES",
          payload: json.data
      })
  }
   }catch(error){   ///noooo
      console.log(error)
   }
  }
export function deleteVideogames (id){
    return async function(dispatch){
        var response = await axios.delete("/Videogames/"+ id);
        return response;
} 
}
export function filtradoXGenero (value){
    return({
        type: "FILTER_BY_GENRE",
        payload: value
    })

    
}
export function filterByCreate (payload){
    return({
        type: "FILTER_BY_CREATE",
        payload
    })
    
}
export function orderByAsc (payload){
    return({
        type: "FILTER_BY_NAME",
        payload
    })
}
export function orderByRating(payload){
    return{
        type: 'ORDER_BY_RATING',
        payload
    }
}
