const inicialState = {     
    videogames:[]
 };

 // EL REDUCER SON LOS ESTADOS QUE VOY A IR TENIENDO
// SWITCH PARECIDO A UN IF
function rootReducer(state = inicialState, action){
    switch(action.type) {
        case "GET_VIDEOGAMES":
            return{
                ...state,
                videogames: action.payload
            }
            default: return {
                state
            }
    }
}
export default rootReducer;