const inicialState = {     
    videogames:[], // ESTADO ACTUAL
    videogames2:[], // ESTADO LLENO
    genres:[],
    detail:[]
 };

 // EL REDUCER SON LOS ESTADOS QUE VOY A IR TENIENDO
// SWITCH PARECIDO A UN IF
function rootReducer(state = inicialState, action){
    switch(action.type) {
            case "GET_VIDEOGAMES":
            return{
                ...state,
                videogames: action.payload,
                videogames2: action.payload
            }
            case "GET_VIDEOGAMES_BY_ID":
            return{
                ...state,
                detail: action.payload? action.payload : action.payload
            }
            case "CLEAR":
            return{
                ...state,
                detail:{}
            }
            case "POST_VIDEOGAMES":
            return{
                ...state,
            }
            case "GET_GENRES":
            return{
                ...state,
                genres: action.payload
            }
            case "GET_NAME_GAMES":
            return{
                ...state,
                videogames: action.payload,
            }
            case "FILTER_BY_GENRE":
                    const allVideogames = state.videogames2
                    const genreVideogames = allVideogames.filter(e=> e.genres.includes(action.payload +" - "))
                return{
                    ...state,
                    videogames: genreVideogames
                }
                case"FILTER_BY_CREATE":
                const allVideogames2 = state.videogames2
                const videogamesCreateOrNot = action.payload === "creadoDB" ? allVideogames2.filter(e=>e.createdInDb) : allVideogames2.filter(e=>!e.createdInDb)
                return{
                    ...state,
                    videogames: action.payload === "Todos" ? allVideogames2 : videogamesCreateOrNot
                }
                case"FILTER_BY_NAME":
                let sortedArr = action.payload === 'asc' ?
                state.videogames2.sort(function (a, b) {
                    if (a.name < b.name) return -1;
                    if (a.name > b.name) return 1;
                    return 0;
                }) :
                state.videogames2.sort(function (a, b) {
                    if (a.name > b.name) return -1;
                    if (a.name < b.name) return 1;
                    return 0;
                })
            return {
                ...state,
                videogames: sortedArr
            }
            case 'ORDER_BY_RATING':
                let sortedRat = action.payload === '-/+' ?
                    state.videogames2.sort(function (a, b) {
                        if (a.rating < b.rating) return -1;
                        if (a.rating > b.rating) return 1;
                        return 0;
                    }) :
                    state.videogames2.sort(function (a, b) {
                        if (a.rating > b.rating) return -1;
                        if (a.rating < b.rating) return 1;
                        return 0;
                    })
                return {
                    ...state,
                    videogames: sortedRat
                }
            default: return {
                state
            }
    }
}
export default rootReducer;