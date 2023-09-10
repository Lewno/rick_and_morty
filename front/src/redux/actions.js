import axios from "axios";

export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const GET_FAVORITES = "GET_FAVORITES";
export const GET_CHARACTER_DETAIL = "GET_CHARACTER_DETAIL";


export const addFavorite = (character) =>{
  return {type:ADD_FAVORITE,payload : character};
};

export const removeFavorite = (id) =>{
  return {type:REMOVE_FAVORITE,payload : id};
};
const URL_BASE = "https://rickandmorty-production-4571.up.railway.app";

export const getCharacterDetail = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`${URL_BASE}/detail/${id}`);
    dispatch({ type: GET_CHARACTER_DETAIL, payload: response.data });
  };
};

export const getFavorites = () => {
  return async function (dispatch) {
    const response = await axios.get(`${URL_BASE}/rickandmorty/fav`);
    dispatch({ type: GET_FAVORITES, payload: response.data });
  };
};

export const filterCards = (gender) =>{
  return async function (dispatch) {
    const response = await axios.get(`${URL_BASE}/rickandmorty/fav`);
    dispatch({type:FILTER, payload : response.data.filter(
      (char)=>char.gender === gender)});
  };
};

export const orderCards = (id) =>{
  return async function (dispatch) {
    const response = await axios.get(`${URL_BASE}/rickandmorty/fav`);
    if(id === "Ascendente") {response.data.sort((a,b)=>a.id - b.id)}
    else {response.data.sort((a,b)=>b.id - a.id)}
    dispatch({type:ORDER, payload : response.data});
  };
};


export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};