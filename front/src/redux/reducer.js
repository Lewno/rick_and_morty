import {
  ADD_FAVORITE,
  CLEAN_DETAIL,
  GET_CHARACTER_DETAIL,
  GET_FAVORITES,
  REMOVE_FAVORITE,
} from "./actions";
import {FILTER,ORDER } from "./actions";


const initialState = {
  myFavorites : [],
  characterDetail: {},
  allCharacters : []
};

const rootReducer = (state = initialState,action) =>{
  switch(action.type){

    case ADD_FAVORITE:
      return{
        ...state,
         myFavorites:[...state.myFavorites, action.payload],
         allCharacters:[...state.myFavorites,  action.payload]
        };
    case REMOVE_FAVORITE:
      return{
        ...state,
        myFavorites: state.myFavorites.filter(
          (char) => char.id !== action.payload
        ),
      };
    case FILTER: 
      
      return {
        ...state,  
        myFavorites:action.payload

      }; 
    case ORDER:
      return {
        ...state,  
        myFavorites:action.payload

      };   
    case GET_CHARACTER_DETAIL:
      return {
        ...state,
        characterDetail: action.payload,
      };   
    
    case CLEAN_DETAIL:
      return {
        ...state,
        characterDetail: {},
      };
    
    case GET_FAVORITES:
    return { ...state, myFavorites: action.payload };

    default:
      return {...state};
  }
};



export default rootReducer;