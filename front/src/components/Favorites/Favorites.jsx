import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./Favorites.module.css";
import { useDispatch } from 'react-redux';
import {orderCards, filterCards} from "../../redux/actions";

const Favorites = ({onClose}) =>{
    const dispatch = useDispatch()
    const favorites =useSelector(state => state.myFavorites);


    const ordernar = (event) =>{
        dispatch(orderCards(event.target.value));

    };
    const filtrar = (event) =>{
        dispatch(filterCards(event.target.value)); 
    };

    return (
        <div className={style.container}> 
            <div className={style.selection}>
                <select onChange={ordernar} defaultValue={"order"}>
                    <option value="order" disabled >Order by</option>    
                    <option value="Ascendente">Ascendente</option>    
                    <option value="Descendente">Descendente</option>
                </select>    
                <select onChange={filtrar} defaultValue={"order"}>
                    <option value="order" disabled >filter by</option>    
                    <option value="Male">Male</option>    
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>    
                    <option value="unknown">unknown</option>
                </select>  
            </div> 

            <div className={style.favs}>
            {
                favorites.map(({id, name,species,gender,image}) => {
                    return(
                       <Card 
                          id={id} 
                          name = {name} 
                          species = {species} 
                          gender = {gender} 
                          image = {image} 
                          key={id}
                          onClose={onClose}
                       />
                    );
                 })
            }
            </div>
        </div>
    )
};

export default Favorites;