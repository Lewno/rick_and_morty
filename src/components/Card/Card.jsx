import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {addFavorite, removeFavorite} from "../../redux/actions";
import { useState } from "react";
import { useEffect } from "react";


function Card({id,image,name,species,gender,onClose, addFavorite, removeFavorite,myFavorites}) {

   const [isFav,SetIsFav] = useState(false);

   const handleFavorite = ()=>{
      if(isFav) {
         SetIsFav(false);
         removeFavorite(id);
      } else {
         SetIsFav(true);
         addFavorite({id,image,name,species,gender,onClose});
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            SetIsFav(true);
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