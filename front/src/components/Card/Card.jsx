import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import {addFavorite, removeFavorite, getFavorites} from "../../redux/actions";
import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";


function Card({id,image,name,species,gender,onClose,myFavorites}) {

   const [isFav,setIsFav] = useState(false);
   const dispatch = useDispatch();

   const addFavorite = async (character) => {
      await axios
        .post("http://localhost:3001/rickandmorty/fav", character)
        dispatch(getFavorites());
    };

    const removeFavorite = async (id) => {
      await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
      dispatch(getFavorites());
      alert("Eliminado con éxito");
    };

   const handleFavorite = ()=>{
      if(isFav) {
         setIsFav(false);
         removeFavorite(id);
      } else {
         setIsFav(true);
         addFavorite({id,image,name,species,gender,onClose});
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.containerCard}>
         <div className={style.box}>
            <img className={style.image} src={image} alt="xd" /> 
            <Link to={`/detail/${id}`}>
             <h2 className={style.titulo}>{name}</h2>
            </Link>
            <button className={style.buttonX} onClick={()=>onClose(id)}>X</button>
            {
               isFav ? (
                  <button className={style.buttonCora} onClick={handleFavorite}>❤️</button>
               ) : (
                  <button className={style.buttonCora} onClick={handleFavorite}>🤍</button>
               )
            }
         </div>
         <div className={style.info}>
            <h2>{species}</h2>
            <h2>{gender}</h2>
         </div>
      </div>
   );
}

const mapDispatchToProps = (dispatch) =>{
   return{
      addFavorite : (character) =>{
         dispatch(addFavorite(character));
      },
      removeFavorite : (id) =>{
         dispatch(removeFavorite(id));
      }
   }
}

const mapStateToProps = (state) =>{
   return{
      myFavorites : state.myFavorites
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Card);