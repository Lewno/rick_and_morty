import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./Favorites.module.css"

const Favorites = () =>{

    const favorites =useSelector(state => state.myFavorites);
    
    return (
        <div className={style.container}>  
            {
                favorites.map(({id, name,species,gender,image}) => {
                    return(
                       <Card 
                          id={id} 
                          name = {name} 
                          species = {species} 
                          gender = {gender} 
                          image = {image} 
                       />
                    );
                 })
            }
        </div>
    )
};

export default Favorites;