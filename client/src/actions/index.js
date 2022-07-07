import axios from "axios";


//DISPATCH, EXPORTA SOLO LAS ACCIONES AL REDUCER SIN TENER QUE IMPORTARLAS
export function getVideogames (){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/Videogames");
     return dispatch({
        type: "GET_VIDEOGAMES",
        payload: json.data
    })
}
}